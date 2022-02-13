import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PostDetailContent } from '../../../../components/atomic/organisms/posts/PostDetailContent';
import { PostDetailImage } from '../../../../components/atomic/organisms/posts/PostDetailImage';
import { PostDetailUserCard } from '../../../../components/atomic/organisms/posts/PostDetailUserCard';
import { Layout } from '../../../../components/atomic/template/Layout';

const UserPage: NextPage = () => {
  return (
    <Layout title={'${user.name}のポスト「${props.user.posts[0].content}」'}>
      <VStack>
        <PostDetailUserCard />
        <PostDetailImage />
        <PostDetailContent />
      </VStack>
    </Layout>
  );
};

export default UserPage;
