import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PostDetailComment } from '../../../../components/atomic/organisms/posts/PostDetailComment';
import { PostDetailContent } from '../../../../components/atomic/organisms/posts/PostDetailContent';
import { PostDetailImage } from '../../../../components/atomic/organisms/posts/PostDetailImage';
import { PostDetailUserCard } from '../../../../components/atomic/organisms/posts/PostDetailUserCard';
import { Layout } from '../../../../components/atomic/template/Layout';

const UserPage: NextPage = () => {
  return (
    <Layout title={'${user.name}のポスト「${props.user.posts[0].content}」'}>
      <VStack spacing={4}>
        <PostDetailUserCard />
        <PostDetailImage />
        <PostDetailContent />
        <PostDetailComment />
      </VStack>
    </Layout>
  );
};

export default UserPage;
