import { VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRef } from 'react';

import { PostDetailComment } from '../../../../components/atomic/organisms/posts/PostDetailComment';
import { PostDetailContent } from '../../../../components/atomic/organisms/posts/PostDetailContent';
import { PostDetailImage } from '../../../../components/atomic/organisms/posts/PostDetailImage';
import { PostDetailPetInfo } from '../../../../components/atomic/organisms/posts/PostDetailPetInfo';
import { PostDetailUserCard } from '../../../../components/atomic/organisms/posts/PostDetailUserCard';
import { Layout } from '../../../../components/atomic/template/Layout';

const PostPage: NextPage = () => {
  // CommentIconをクリックしたら、入力のTextAreaにfocusを当てる
  const commentInput = useRef<HTMLTextAreaElement>(null);
  return (
    <Layout title={'${user.name}のポスト「${props.user.posts[0].content}」'}>
      <VStack spacing={4}>
        <PostDetailUserCard />
        <PostDetailImage />
        <PostDetailPetInfo
          onClick={() => {
            commentInput.current?.focus();
          }}
        />
        <PostDetailContent />
        <PostDetailComment commentInput={commentInput} />
      </VStack>
    </Layout>
  );
};

export default PostPage;
