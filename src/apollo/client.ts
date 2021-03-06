import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, split } from '@apollo/client';
import { createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';

import { auth } from '../firebase/firebaseConfig';
import { cache } from './cache';

const AUTH_TOKEN = 'hasura-auth-token';
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  let token;
  if (!auth.currentUser?.isAnonymous && auth.currentUser) {
    token = localStorage.getItem(AUTH_TOKEN);
  }
  return token
    ? {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      }
    : { headers };
});

const wsLink = process.browser
  ? new WebSocketLink({
      uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT_WS as string,
      options: {
        reconnect: true,
        lazy: true,
        inactivityTimeout: 30000,
      },
    })
  : undefined;

// Query/MutationはHTTP、SubscriptionはWebSocketで通信
const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
      },
      wsLink as WebSocketLink,
      authLink.concat(httpLink),
    )
  : authLink.concat(httpLink);

export const createApolloClient = () => {
  return new ApolloClient({
    cache,
    link: splitLink,
    ssrMode: typeof window === 'undefined',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
};

// ログイン処理
export const onLogin = (token: string) => {
  if (localStorage.getItem(AUTH_TOKEN) !== token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

//ログアウト処理
export const onLogout = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN);
  }
  try {
    apolloClient.resetStore;
  } catch (e) {
    // eslint-disable-next-line
    console.error(`Logout Failed. ${e}`);
  }
};

export const initializeApollo = (initialState: AppProps['pageProps'] = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => {
        return [
          ...sourceArray,
          ...destinationArray.filter((d) => {
            return sourceArray.every((s) => {
              return !isEqual(d, s);
            });
          }),
        ];
      },
    });

    _apolloClient.cache.restore(data);
  }

  // SSGとSSRでは、常にApollo Clientを新規作成
  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  // Client側で一度Apollo Clientを作成。
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export const addApolloState = (client: ApolloClient<NormalizedCacheObject>, pageProps: AppProps['pageProps']) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
};

export const useApollo = (pageProps: AppProps['pageProps']) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => {
    return initializeApollo(state);
  }, [state]);
  return store;
};
