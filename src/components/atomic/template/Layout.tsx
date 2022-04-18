import { useReactiveVar } from '@apollo/client';
import Head from 'next/head';
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';

import { loginUserVar } from '../../../apollo/cache';
import { FooterLayout } from '../organisms/layout/FooterLayout';
import { HeaderLayout } from '../organisms/layout/HeaderLayout';

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: VFC<Props> = memo((props) => {
  const { title, children } = props;
  const loginUser = useReactiveVar(loginUserVar);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content=" width=device-width, initial-scale=1.0" />
      </Head>
      <HeaderLayout user={loginUser} />
      {children}
      <FooterLayout />
    </>
  );
});
