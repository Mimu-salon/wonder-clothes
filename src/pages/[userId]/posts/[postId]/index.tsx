import type { NextPage } from 'next';

import { PostDetailUserCard } from '../../../../components/atomic/organisms/posts/PostDetailUserCard';
import { Layout } from '../../../../components/atomic/template/Layout';

const UserPage: NextPage = () => {
  return (
    <Layout title={'${user.name}のポスト「${props.user.posts[0].content}」'}>
      <PostDetailUserCard />
    </Layout>
  );
};

export default UserPage;
