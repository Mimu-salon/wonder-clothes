/* eslint-disable @next/next/no-img-element */
import { useReactiveVar } from '@apollo/client';
import { Box, Button, Flex, Input, Stack, Text, Textarea, useDisclosure, VStack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo, useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { loginUserVar } from '../../../../apollo/cache';
import { initializeApollo } from '../../../../apollo/client';
import type { UpdateUserProfileMutation, UpdateUserProfileMutationVariables } from '../../../../apollo/graphql';
import { UPDATE_USER_PROFILE } from '../../../../apollo/queries';
import { useMessage } from '../../../hooks/useMessage';
import { uploadProfileImage } from '../../../hooks/useUploadProfileImage';
import { UserIcon } from '../../atoms/UserIcon';
import { ImageTrimmingModal } from '../../molecules/ImageTrimmingModal';

type FormType = {
  name: string;
  id: string;
  profile: string;
};

const REQUIRE = '必須入力項目です';
const ALREADY_ID = 'このIDは既に登録されています';
const VIOLATION_ID_COUNT = 'IDは5文字以上16文字以下で入力してください';
const VIOLATION_NAME_COUNT = 'ユーザー名は16文字以下で入力してください';
const VIOLATION_PROFILE_COUNT = 'プロフィールは160文字以下で入力してください';

const profileUpdateSchema = yup.object().shape({
  name: yup.string().required(REQUIRE).max(16, VIOLATION_NAME_COUNT),
  id: yup.string().required(REQUIRE).min(5, VIOLATION_ID_COUNT).max(15, VIOLATION_ID_COUNT),
  profile: yup.string().nullable().max(160, VIOLATION_PROFILE_COUNT),
});

export const ProfileUpdateForm: VFC = memo(() => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [uploadImage, setUploadImage] = useState<Blob | string | null>(null);
  const [isIdDuplicateError, setIsIdDuplicateError] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showMessage } = useMessage();
  const router = useRouter();

  const loginUser = useReactiveVar(loginUserVar);
  const client = initializeApollo();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormType>({
    resolver: yupResolver(profileUpdateSchema),
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    let url = null;
    if (uploadImage && typeof uploadImage === 'string') {
      url = uploadImage;
    } else if (uploadImage && typeof uploadImage !== 'string') {
      url = await uploadProfileImage(uploadImage);
    }
    try {
      if (loginUser) {
        const resdata = await client.mutate<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>({
          mutation: UPDATE_USER_PROFILE,
          variables: {
            id: loginUser.id,
            name: data.name,
            display_id: data.id,
            profile: data.profile,
            image: url,
          },
        });
        loginUserVar(resdata.data?.insert_users_one);
      }
      router.push('/');
    } catch (error) {
      setIsIdDuplicateError(true);
      showMessage({
        title: 'エラーが発生しました',
        status: 'error',
      });
    }
  };

  useEffect(() => {
    if (loginUser) {
      setUploadImage(loginUser.image ?? null);
      setValue('name', loginUser.name);
      setValue('id', loginUser.display_id);
      setValue('profile', loginUser.profile as string);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <VStack py={8}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '600px', lg: '720px' }}
          height={{ sm: '800px', md: '38rem', lg: '38rem' }}
          alignItems="flex-start"
          direction={{ base: 'column', md: 'row' }}
          bg="white"
          boxShadow={'2xl'}
          padding={6}>
          <Stack direction="column" _hover={{ opacity: 0.8 }} mr={4} mb={4} onClick={onOpen}>
            {previewImage ? (
              <Box borderRadius="full" w="120px" h="120px" overflow="hidden">
                <img src={previewImage} alt="プレビュー" />
              </Box>
            ) : (
              <UserIcon src={loginUser?.image} width={120} height={120} />
            )}
            <Text textAlign="center" fontSize="13px" color="blue.400">
              変更
            </Text>
          </Stack>
          <ImageTrimmingModal
            isOpen={isOpen}
            onClose={onClose}
            setImage={setPreviewImage}
            setUploadImage={setUploadImage}
          />

          <Stack direction="column" w="100%" spacing={4}>
            <Box>
              <Text mb={1} fontSize="sm">
                ユーザー名
              </Text>
              <Text fontSize="sm" color="red.500">
                {errors.name?.message}
              </Text>
              <Input borderColor="gray.400" {...register('name')} />
            </Box>
            <Box>
              <Text mb={1} fontSize="sm">
                ID
              </Text>
              <Text fontSize="sm" color="red.500">
                {errors.id?.message} {isIdDuplicateError && ALREADY_ID}
              </Text>
              <Input
                borderColor="gray.400"
                {...register('id')}
                onChange={() => {
                  setIsIdDuplicateError(false);
                }}
              />
            </Box>
            <Box minH={{ sm: '150px', md: '165px', lg: '150px' }} px={1}>
              <Text mb={1} fontSize="sm">
                プロフィール
              </Text>
              <Text fontSize="sm" color="red.500">
                {errors.profile?.message}
              </Text>
              <Box position="relative">
                <Textarea
                  placeholder="プロフィールを入力（160字まで）"
                  borderColor="gray.400"
                  bg="white"
                  borderRadius="14px"
                  pr={{ base: '56px', lg: '90px' }}
                  w={{ base: '88vw', md: '400px', lg: '520px' }}
                  h="250px"
                  {...register('profile')}
                />
              </Box>
            </Box>
            <Flex justifyContent="flex-end">
              <Button size="md" colorScheme="teal" opacity={0.9} boxShadow="md" type="submit">
                更新
              </Button>
            </Flex>
          </Stack>
        </Stack>
      </VStack>
    </form>
  );
});
