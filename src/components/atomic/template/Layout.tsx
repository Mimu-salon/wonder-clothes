import Head from 'next/head';
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';

import { Footer } from '../organisms/layout/Footer';
import { Header } from '../organisms/layout/Header';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: VFC<Props> = memo((props) => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content=" width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
});
