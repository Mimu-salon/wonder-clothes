import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

import { PostCard } from '../../components/atomic/molecules/PostCard';
import { PostTabs } from '../../components/atomic/organisms/userPage/PostTabs';
import { Profile } from '../../components/atomic/organisms/userPage/Profile';
import { Layout } from '../../components/atomic/template/Layout';

const UserPage: NextPage = () => {
  const handleMoreMyPostLoad = () => {
    // eslint-disable-next-line no-console
    console.log('handleMoreLoad');
  };

  return (
    <Layout title={'${user.name}のマイページ | わんだーくろーす'}>
      <Profile />
      <PostTabs defaultTab={0} userDisplayId="1" />
      {/* userDisplayIdとしてuser.display_idを設定予定 */}

      <Box textAlign="center" maxW="1200px" mx="auto" pt={10} pb={20}>
        <Text my="20px" color="gray.400" fontWeight="bold">
          まだ投稿はありません。
        </Text>
        <Box filter="grayscale(55%)">
          <Image src={'/sampledog.png'} alt={'投稿なし'} width={350} height={350} />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 2 }} spacing={2}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </SimpleGrid>
        <Button my="40px" onClick={handleMoreMyPostLoad}>
          もっと見る
        </Button>
      </Box>
    </Layout>
  );
};

export default UserPage;
