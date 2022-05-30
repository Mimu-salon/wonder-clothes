import { Box, Center, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import * as yup from 'yup';

import { loginUserVar } from '../apollo/cache';
import { initializeApollo } from '../apollo/client';
import type { ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables } from '../apollo/graphql';
import { REACTIVE_VAR_GET_USER } from '../apollo/queries';
import { IconButton } from '../components/atomic/atoms/IconButton';
import { PrimaryButton } from '../components/atomic/atoms/PrimaryButton';
import { InputForm } from '../components/atomic/molecules/InputForm';
import { Layout } from '../components/atomic/template/Layout';
import { useMessage } from '../components/hooks/useMessage';
import { useUserChanged } from '../components/hooks/userUserChanged';
import firebase, { auth } from '../firebase/firebaseConfig';

type FormType = {
  email: string;
  password: string;
};

const REQUIRE_MSG = '必須入力項目です';
const VIOLATION_EMAIL = '正しい形式で入力してください';

const LoginSchema = yup.object().shape({
  email: yup.string().required(REQUIRE_MSG).email(VIOLATION_EMAIL),
  password: yup.string().required(REQUIRE_MSG),
});

export const userLoginAction = async (credential: firebase.auth.UserCredential) => {
  const client = initializeApollo();
  const user = credential.user;
  if (user !== null) {
    const resdata = await client.query<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>({
      query: REACTIVE_VAR_GET_USER,
      variables: {
        id: user.uid,
      },
    });
    // グローバルステートにユーザー情報格納
    loginUserVar(resdata.data.users_by_pk);
  }
};

const SignIn: NextPage = () => {
  const router = useRouter();
  const { unSubUser } = useUserChanged();
  const { showMessage } = useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(LoginSchema),
  });
  const emailLogin: SubmitHandler<FormType> = (data) => {
    auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        auth
          .signInWithEmailAndPassword(data.email, data.password)
          .then(async (userCredential) => {
            await unSubUser(userCredential);
            await userLoginAction(userCredential);
            router.push('/');
          })
          .catch((error) => {
            console.error(error.code, error.message);
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
              showMessage({
                title: 'ユーザ名またはパスワードが違います',
                status: 'error',
              });
            } else {
              showMessage({
                title: 'エラーが発生しました',
                status: 'error',
              });
            }
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        auth
          .signInWithPopup(provider)
          .then(async (userCredential) => {
            await unSubUser(userCredential);
            if (userCredential.additionalUserInfo?.isNewUser) {
              router.push('/successSignup');
            } else {
              await userLoginAction(userCredential);
              router.push('/');
            }
          })
          .catch((error) => {
            console.error(error.code, error.message);
            showMessage({
              title: 'エラーが発生しました',
              status: 'error',
            });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const twitterLogin = async () => {
    const provider = new firebase.auth.TwitterAuthProvider();
    await auth
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        auth
          .signInWithPopup(provider)
          .then(async (userCredential) => {
            await unSubUser(userCredential);
            if (userCredential.additionalUserInfo?.isNewUser) {
              router.push('/successSignup');
            } else {
              await userLoginAction(userCredential);
              router.push('/');
            }
          })
          .catch((error) => {
            console.error(error.code, error.message);
            showMessage({
              title: 'エラーが発生しました',
              status: 'error',
            });
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout title="ログイン | わんだーくろーす">
      <form onSubmit={handleSubmit(emailLogin)} noValidate>
        <Flex align="center" justify="center">
          <Box bg="white" w={{ base: 'sm', md: 'md' }} my={4} p={4} borderRadius="md" shadow="md">
            <Heading size="lg" textAlign="center">
              ログイン
            </Heading>
            <Divider my={4} />
            <Stack spacing={6} py={4} px={10}>
              <Stack spacing={10}>
                <Center>
                  <IconButton
                    fontWeight="semibold"
                    bg="white"
                    border="2px"
                    borderColor="gray.700"
                    color="gray.700"
                    icon={FcGoogle}
                    iconPosition="left"
                    onClick={googleLogin}>
                    Googleでログイン
                  </IconButton>
                </Center>
                <Center>
                  <IconButton
                    fontWeight="semibold"
                    bg="white"
                    border="2px"
                    borderColor="#55ACEE"
                    color="gray.700"
                    icon={FaTwitter}
                    iconPosition="left"
                    onClick={twitterLogin}>
                    Twitterでログイン
                  </IconButton>
                </Center>
              </Stack>
              <Divider />
              <InputForm
                label="メールアドレス"
                placeholder="メールアドレスを入力"
                name="email"
                type="email"
                isRequired={false}
                registers={register('email')}
                errorMessage={errors.email?.message}
              />
              <InputForm
                label="パスワード"
                placeholder="パスワードを入力"
                name="password"
                type="password"
                isRequired={false}
                registers={register('password')}
                errorMessage={errors.password?.message}
              />
              <PrimaryButton type="submit">ログイン</PrimaryButton>
              <Center color="blue">
                <Link href="/signup" passHref>
                  <a href="replace">アカウントをお持ちでない場合</a>
                </Link>
              </Center>
            </Stack>
          </Box>
        </Flex>
      </form>
    </Layout>
  );
};

export default SignIn;
