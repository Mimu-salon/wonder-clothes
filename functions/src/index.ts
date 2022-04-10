import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import fetch from 'node-fetch';

admin.initializeApp();

const CREATE_USER = gql`
  mutation CreateUser($id: String!, $display_id: String!, $email: String!, $name: String!, $image: String) {
    insert_users_one(object: { id: $id, display_id: $display_id, name: $name, email: $email, image: $image }) {
      id
      display_id
      email
      name
      image
      created_at
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const httpLink = createHttpLink({ uri: functions.config().hasura.url, fetch: fetch as any });
const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': functions.config().hasura.admin_secret,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  const customClaims = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'staff',
      'x-hasura-allowed-roles': ['staff'],
      'x-hasura-user-id': user.uid,
    },
  };
  // displayIDはuserIDの先頭8桁とする
  const display_id = user.uid.substring(0, 8);
  const image = user.photoURL;
  try {
    //カスタムクレーム
    await admin.auth().setCustomUserClaims(user.uid, customClaims);
    //EmailでのSignup、Google/Twitterでの初回ログイン時 Hasuraのusersに追加
    await client.mutate({
      variables: {
        id: user.uid,
        display_id: display_id,
        email: user.email,
        name: user.displayName || 'guest',
        image,
      },
      mutation: CREATE_USER,
    });
    await admin.firestore().collection('user_meta').doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
});
