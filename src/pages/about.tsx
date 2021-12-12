import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/atomic/organisms/layout/header';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>わんだーくろーす</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>aboutページ</h1>
    </>
  );
};

export default About;
