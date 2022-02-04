import type { NextPage } from 'next';

import { Profile } from '../../components/atomic/organisms/userPage/Profile';
import { Layout } from '../../components/atomic/template/Layout';

const UserPage: NextPage = () => {
  return (
    <Layout title={'${user.name}のマイページ | わんだーくろーす'}>
      <Profile />
    </Layout>
  );
};

export default UserPage;
