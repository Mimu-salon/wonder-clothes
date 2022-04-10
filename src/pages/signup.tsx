import { Box, Center, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import type { NextPage } from 'next';
import Link from 'next/link';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { PrimaryButton } from '../components/atomic/atoms/PrimaryButton';
import { InputForm } from '../components/atomic/molecules/InputForm';
import { Layout } from '../components/atomic/template/Layout';
import { useMessage } from '../components/hooks/useMessage';
import { auth } from '../firebase/firebaseConfig';

type FormType = {
  email: string;
  username: string;
  password: string;
  password_confirm: string;
};

const REQUIRE_MSG = '必須入力項目です';
const VIOLATION_EMAIL = '正しい形式で入力してください';
const VIOLATION_NAME_COUNT = 'ユーザー名は16文字以下で入力してください';
const VIOLATION_PASSWORD_COUNT = 'パスワードは6文字以上16文字以下で入力してください';
const VIOLATION_PASSWORD_CONFIRM = '入力したパスワードが一致しません';

const SignupSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_MSG).email(VIOLATION_EMAIL),
  username: yup.string().required(REQUIRE_MSG).max(16, VIOLATION_NAME_COUNT),
  password: yup.string().required(REQUIRE_MSG).min(6, VIOLATION_PASSWORD_COUNT).max(16, VIOLATION_PASSWORD_COUNT),
  password_confirm: yup
    .string()
    .required(REQUIRE_MSG)
    .oneOf([yup.ref('password'), null], VIOLATION_PASSWORD_CONFIRM),
});

const SignUp: NextPage = () => {
  const { showMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        const user = auth.currentUser;
        return user?.updateProfile({
          displayName: data.username,
        });
      })
      .catch((error) => {
        console.error(error.code, error.massage);
        if (error.code === 'auth/email-already-in-use') {
          showMessage({
            title: '入力したメールアドレスは既に登録済みです',
            status: 'error',
          });
        } else {
          showMessage({
            title: 'エラーが発生しました',
            status: 'error',
          });
        }
      });
  };

  return (
    <Layout title="アカウント登録 | わんだーくろーす">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Flex align="center" justify="center" h="75vh">
          <Box bg="white" w={{ base: 'sm', md: 'md' }} p={4} borderRadius="md" shadow="md">
            <Heading size="lg" textAlign="center">
              アカウント登録
            </Heading>
            <Divider my={4} />
            <Stack spacing={6} py={4} px={10}>
              <InputForm
                label="メールアドレス"
                placeholder="メールアドレスを入力"
                name="email"
                type="email"
                isRequired={true}
                registers={register('email')}
                errorMessage={errors.email?.message}
              />
              <InputForm
                label="ユーザー名"
                placeholder="ユーザー名を入力"
                name="username"
                type="text"
                isRequired={true}
                registers={register('username')}
                errorMessage={errors.username?.message}
              />
              <InputForm
                label="パスワード"
                placeholder="パスワードを入力"
                name="password"
                type="password"
                isRequired={true}
                registers={register('password')}
                errorMessage={errors.password?.message}
              />
              <InputForm
                label="パスワード（確認用）"
                placeholder="同じパスワードを入力"
                name="password_confirm"
                type="password"
                isRequired={true}
                registers={register('password_confirm')}
                errorMessage={errors.password_confirm?.message}
              />
              <PrimaryButton type="submit">登録</PrimaryButton>
              <Center color="blue">
                <Link href="/signin" passHref>
                  <a href="replace">すでにアカウントをお持ちの場合</a>
                </Link>
              </Center>
            </Stack>
          </Box>
        </Flex>
      </form>
    </Layout>
  );
};

export default SignUp;
