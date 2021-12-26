import { Box, Center, Divider, Flex, Heading, Input, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { PrimaryButton } from '../components/atomic/atoms/PrimaryButton';
import { Layout } from '../components/atomic/template/Layout';
import { useAuth } from '../components/hooks/useAuth';

const SignIn: NextPage = () => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const { login, loading } = useAuth();

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);
  const onChangeUserPassword = (e: ChangeEvent<HTMLInputElement>) => setUserPassword(e.target.value);

  const onClickLogin = () => login(userEmail);

  return (
    <Layout title="ログイン | わんだーくろーす">
      <Flex align="center" justify="center" h="75vh">
        <Box bg="white" w={{ base: 'sm', md: 'md' }} p={4} borderRadius="md" shadow="md">
          <Heading size="lg" textAlign="center">
            ログイン
          </Heading>
          <Divider my={4} />
          <Stack spacing={6} py={4} px={10}>
            <Box>
              <Text mb={2} fontSize="sm">
                メールアドレス
              </Text>
              <Input placeholder="メールアドレスを入力" type="email" value={userEmail} onChange={onChangeUserId} />
            </Box>
            <Box>
              <Text mb={2} fontSize="sm">
                パスワード
              </Text>
              <Input
                placeholder="パスワードを入力"
                type="password"
                value={userPassword}
                onChange={onChangeUserPassword}
              />
            </Box>
            <PrimaryButton disabled={userEmail === '' || userPassword === ''} loading={loading} onClick={onClickLogin}>
              ログイン
            </PrimaryButton>
            <Center color="blue">
              <Link href="/signup" passHref>
                <a href="replace">アカウントをお持ちでない場合</a>
              </Link>
            </Center>
          </Stack>
        </Box>
      </Flex>
    </Layout>
  );
};

export default SignIn;
