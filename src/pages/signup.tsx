import { Box, Center, Divider, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { PrimaryButton } from '../components/atomic/atoms/PrimaryButton';
import { Layout } from '../components/atomic/template/Layout';
import { useFirebaseAuth } from '../components/hooks/useFirebaseAuth';

const SignUp: NextPage = () => {
  const { email, password, emailChange, passwordChange, authUser } = useFirebaseAuth();

  return (
    <Layout title="アカウント登録 | わんだーくろーす">
      <Flex align="center" justify="center" h="75vh">
        <Box bg="white" w={{ base: 'sm', md: 'md' }} p={4} borderRadius="md" shadow="md">
          <Heading size="lg" textAlign="center">
            アカウント登録
          </Heading>
          <Divider my={4} />
          <form onSubmit={authUser}>
            <Stack spacing={6} py={4} px={10}>
              <Box>
                <Text mb={2} fontSize="sm">
                  メールアドレス
                </Text>
                <Input placeholder="メールアドレスを入力" type="email" value={email} onChange={emailChange} />
              </Box>
              <Box>
                <Text mb={2} fontSize="sm">
                  パスワード
                </Text>
                <Input placeholder="パスワードを入力" type="password" value={password} onChange={passwordChange} />
              </Box>
              <PrimaryButton disabled={!email || !password} type="submit">
                ログイン
              </PrimaryButton>
              <Center color="blue">
                <Link href="/signin" passHref>
                  <a href="replace">すでにアカウントをお持ちの場合</a>
                </Link>
              </Center>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Layout>
  );
};

export default SignUp;
