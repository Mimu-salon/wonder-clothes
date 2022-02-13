import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PostDetailImage } from '../../../../components/atomic/organisms/posts/PostDetailImage';
import { PostDetailUserCard } from '../../../../components/atomic/organisms/posts/PostDetailUserCard';
import { Layout } from '../../../../components/atomic/template/Layout';

const UserPage: NextPage = () => {
  return (
    <Layout title={'${user.name}のポスト「${props.user.posts[0].content}」'}>
      <VStack>
        <PostDetailUserCard />
        <PostDetailImage />
      </VStack>
    </Layout>
  );
};

export default UserPage;
