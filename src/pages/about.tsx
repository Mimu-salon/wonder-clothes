import { Box } from '@chakra-ui/layout';
import type { NextPage } from 'next';

import { Concept } from '../components/atomic/organisms/about/Concept';
import { Heros } from '../components/atomic/organisms/about/Heros';
import { Heros2 } from '../components/atomic/organisms/about/Heros2';
import { HowToUse } from '../components/atomic/organisms/about/HowToUse';
import { Layout } from '../components/atomic/template/Layout';

const About: NextPage = () => {
  return (
    <Layout title="わんだーくろーす | 愛犬ファッション投稿">
      <Heros />
      <Box textAlign="center">一時的なスペース</Box>
      <Heros2 />
      <Concept />
      <HowToUse />
    </Layout>
  );
};

export default About;
