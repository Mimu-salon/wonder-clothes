import { Button } from '@chakra-ui/button';
import { Box, Center, Divider, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FaRegCheckCircle } from 'react-icons/fa';

import { loginUserVar } from '../apollo/cache';
import { initializeApollo } from '../apollo/client';
import type { CreateUserMutation, CreateUserMutationVariables } from '../apollo/graphql';
import { CREATE_USER } from '../apollo/queries';
import { auth } from '../firebase/firebaseConfig';

//EmailでのSignup、Google/Twitterでの初回ログイン時 Hasuraのusersに追加
const userSignupAction = async () => {
  const client = initializeApollo();
  const user = auth.currentUser;
  if (user) {
    // displayIDはuserIDの先頭8桁とする
    const display_id = user.uid.substring(0, 8);
    const image = user.photoURL;
    const resdata = await client.mutate<CreateUserMutation, CreateUserMutationVariables>({
      variables: {
        id: user.uid,
        display_id: display_id,
        email: user.email || 'No_email',
        name: user.displayName || 'Guest',
        image,
      },
      mutation: CREATE_USER,
    });
    // グローバルステートにユーザー情報格納
    loginUserVar(resdata.data?.insert_users_one);
    // eslint-disable-next-line no-console
    console.log(loginUserVar());
  }
};

const SuccessSignUp: NextPage = () => {
  const router = useRouter();

  const onClickHome = async () => {
    await userSignupAction();
    router.push('/');
  };
  const onClickAccount = async () => {
    await userSignupAction();
    router.push(`/setting/account`);
  };
  return (
    <Flex align="center" justify="center" h="75vh">
      <Box bg="white" w={{ base: 'sm', md: 'md' }} p={4} borderRadius="md">
        <Center m={8}>
          <Icon as={FaRegCheckCircle} w={20} h={20} color="blue.500" />
        </Center>
        <Heading size="lg" textAlign="center">
          アカウント作成完了
        </Heading>
        <Divider my={4} />
        <Stack spacing={10} py={4} px={10}>
          <Stack spacing={4}>
            <Text>『わんだーくろーす』にようこそ！まず最初にアカウント設定をしますか？</Text>
            <Text>なお、マイページよりアカウント設定はいつでも可能です。</Text>
          </Stack>
          <Button colorScheme="blue" variant="outline" _hover={{ opacity: 0.8 }} onClick={onClickHome}>
            このままはじめる
          </Button>
          <Button colorScheme="blue" variant="solid" _hover={{ opacity: 0.8 }} onClick={onClickAccount}>
            アカウント設定
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default SuccessSignUp;
