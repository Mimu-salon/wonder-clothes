import '../../styles/globals.css';

import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { loginUserVar } from '../apollo/cache';
import { onLogout, useApollo } from '../apollo/client';
import type { ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables } from '../apollo/graphql';
import { REACTIVE_VAR_GET_USER } from '../apollo/queries';
import { unSubMeta } from '../components/hooks/userUserChanged';
import { theme } from '../components/theme/theme';
import { auth } from '../firebase/firebaseConfig';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  const loginUser = useReactiveVar(loginUserVar);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // ログイン時はグローバルステートをセットするが,ログイン後にURLを直接更新するとリセットされるため、再度セット。
        if (loginUser === null) {
          await apolloClient
            .query<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>({
              query: REACTIVE_VAR_GET_USER,
              variables: {
                id: user.uid,
              },
            })
            .then((getUser) => {
              loginUserVar(getUser.data.users_by_pk);
              // eslint-disable-next-line no-console
              console.log(loginUserVar());
            });
        }
      } else {
        // logout時: グローバルステートを初期化
        if (unSubMeta) {
          unSubMeta();
        }
        await auth.signOut();
        loginUserVar(null);
        // eslint-disable-next-line no-console
        console.log(loginUserVar());
        onLogout();
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
