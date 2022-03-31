import '../../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { useApollo } from '../apollo/client';
import { useUserChanged } from '../components/hooks/userUserChanged';
import { theme } from '../components/theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line no-empty-pattern
  const {} = useUserChanged();

  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
