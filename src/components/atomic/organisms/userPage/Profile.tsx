import { Alert, AlertIcon, Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';
import { VscEdit } from 'react-icons/vsc';

import { UserIcon } from '../../atoms/UserIcon';

export const Profile: VFC = memo(() => {
  return (
    <VStack py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '600px', lg: '720px' }}
        height={{ sm: '450px', md: '21rem', lg: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg="white"
        boxShadow={'2xl'}
        padding={6}>
        <Box mr={4}>
          <UserIcon src="/sampledog.png" width={120} height={120} />
        </Box>
        <Stack direction="column" w="100%">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Heading fontSize={'2xl'}>Lindsey James</Heading>
            <Button size="sm" leftIcon={<VscEdit />} color="gray.500" variant="outline" opacity={0.9} boxShadow="md">
              編集
            </Button>
          </Stack>
          <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
            @lindsey_jam3s
          </Text>
          <Box minH={{ sm: '150px', md: '165px', lg: '150px' }} px={1}>
            <Text color="gray.700">
              テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。
            </Text>
            <Alert status="info" fontSize="14px" color="gray.600" bg="#E0F1FB" borderRadius="md">
              <AlertIcon />
              まだプロフィールは設定されていません
            </Alert>
          </Box>
          <Stack direction="row" spacing={10} pt={2}>
            <Stack spacing={0} alignItems="center">
              <Text color="gray.700" fontWeight={600}>
                投稿数
              </Text>
              <Text fontSize="md" color="gray.500">
                23k
              </Text>
            </Stack>
            <Stack spacing={0} alignItems="center">
              <Text color="gray.700" fontWeight={600}>
                フォロー
              </Text>
              <Text fontSize="md" color="gray.500">
                23k
              </Text>
            </Stack>
            <Stack spacing={0} alignItems="center">
              <Text color="gray.700" fontWeight={600}>
                フォロワー
              </Text>
              <Text fontSize="md" color="gray.500">
                23k
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </VStack>
  );
});
