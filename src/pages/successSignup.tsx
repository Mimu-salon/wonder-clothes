import { Button } from '@chakra-ui/button';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { loginUserVar } from '../apollo/cache';
import { initializeApollo } from '../apollo/client';
import type { CreateUserMutation, CreateUserMutationVariables } from '../apollo/graphql';
import { CREATE_USER } from '../apollo/queries';
import { auth } from '../firebase/firebaseConfig';

//EmailでのSignup、Google/Twitterでの初回ログイン時 Hasuraのusersに追加
const userSignupAction = async () => {
  const client = initializeApollo();
  const user = auth.currentUser;
  if (user) {
    // displayIDはuserIDの先頭8桁とする
    const display_id = user.uid.substring(0, 8);
    const image = user.photoURL;
    const resdata = await client.mutate<CreateUserMutation, CreateUserMutationVariables>({
      variables: {
        id: user.uid,
        display_id: display_id,
        email: user.email || 'No_email',
        name: user.displayName || 'Guest',
        image,
      },
      mutation: CREATE_USER,
    });
    // グローバルステートにユーザー情報格納
    loginUserVar(resdata.data?.insert_users_one);
    // eslint-disable-next-line no-console
    console.log(loginUserVar());
  }
};

const SuccessSignUp: NextPage = () => {
  const router = useRouter();

  const onClickHome = async () => {
    await userSignupAction();
    router.push('/');
  };
  return (
    <>
      <Button colorScheme="blue" onClick={onClickHome}>
        このままはじめる
      </Button>
    </>
  );
};

export default SuccessSignUp;
