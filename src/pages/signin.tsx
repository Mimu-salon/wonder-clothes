import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/atomic/organisms/layout/Header';

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>わんだーくろーす</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>signinページ</h1>
    </>
  );
};

export default SignIn;
