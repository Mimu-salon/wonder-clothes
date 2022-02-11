/* eslint-disable @next/next/no-img-element */
import { Box, Button, Flex, Input, Stack, Text, Textarea, useDisclosure, VStack } from '@chakra-ui/react';
import type { VFC } from 'react';
import { useState } from 'react';
import { memo } from 'react';

import { UserIcon } from '../../atoms/UserIcon';
import { ImageTrimmingModal } from '../../molecules/ImageTrimmingModal';

export const ProfileUpdateForm: VFC = memo(() => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [uploadImage, setUploadImage] = useState<Blob | string | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickUpdateAccount = () => {
    alert('onClickUpdateAccount');
  };
  return (
    <VStack py={8}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '600px', lg: '720px' }}
        height={{ sm: '800px', md: '35rem', lg: '35rem' }}
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
            <UserIcon src="/sampledog.png" width={120} height={120} />
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
            <Text mb={2} fontSize="sm">
              ユーザー名
            </Text>
            <Input borderColor="gray.400" />
          </Box>
          <Box>
            <Text mb={2} fontSize="sm">
              ID
            </Text>
            <Input borderColor="gray.400" />
          </Box>
          <Box minH={{ sm: '150px', md: '165px', lg: '150px' }} px={1}>
            <Text mb={2} fontSize="sm">
              プロフィール
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
              />
            </Box>
          </Box>
          <Flex justifyContent="flex-end">
            <Button
              size="md"
              colorScheme="teal"
              opacity={0.9}
              boxShadow="md"
              onClick={() => {
                onClickUpdateAccount;
              }}>
              更新
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </VStack>
  );
});
