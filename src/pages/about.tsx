import { Center } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { TestLoginButton } from '../components/atomic/atoms/TestLoginButton';
import { Concept } from '../components/atomic/organisms/about/Concept';
import { Hero } from '../components/atomic/organisms/about/Hero';
import { HowToUse } from '../components/atomic/organisms/about/HowToUse';
import { Layout } from '../components/atomic/template/Layout';

const About: NextPage = () => {
  return (
    <Layout title="わんだーくろーす | 愛犬ファッション共有SNS">
      <Hero />
      <Concept />
      <HowToUse />
      <Center m={6}>
        <TestLoginButton />
      </Center>
    </Layout>
  );
};

export default About;
