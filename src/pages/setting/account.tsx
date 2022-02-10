import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { ProfileUpdateForm } from '../../components/atomic/organisms/setting/ProfileUpdateForm';
import { Layout } from '../../components/atomic/template/Layout';

const Account: NextPage = () => {
  return (
    <Layout title="アカウント設定 | わんだーくろーす">
      <Heading size="lg" textAlign="center" mt={10}>
        アカウント設定
      </Heading>
      <ProfileUpdateForm />
    </Layout>
  );
};

export default Account;
