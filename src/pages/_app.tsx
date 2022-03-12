import '../../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { useUserChanged } from '../components/hooks/userUserChanged';
import { theme } from '../components/theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line no-empty-pattern
  const {} = useUserChanged();

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
