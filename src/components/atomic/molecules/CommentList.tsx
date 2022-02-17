import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { VFC } from 'react';
import { memo } from 'react';

import { UserIcon } from '../atoms/UserIcon';

export const CommentList: VFC = memo(() => {
  return (
    <Box minH="200px">
      <Stack direction="row" spacing={4} my={4}>
        <Flex alignItems="flew-start">
          <UserIcon src="/sampledog.png" width={50} height={50} />
        </Flex>
        <Stack direction="column" spacing={0} fontSize="sm">
          <Text fontWeight={600}>UserName</Text>
          <Text color="gray.500">2020/01/01 12:34</Text>
          <Text whiteSpace="pre-wrap">
            コメント。コメント。コメント。
            コメント。コメント。コメント。コメント。コメント。コメント。コメント。コメント。コメント。コメント。コメント。
          </Text>
        </Stack>
      </Stack>
      <VStack bg="gray.50" my={4} minH="inherit" borderRadius="20px">
        <Text color="gray.600" fontSize="sm" my="20px">
          まだコメントはありません、投稿してみよう！
        </Text>
        <Box
          css={css`
            filter: grayscale(50%);
          `}>
          <Image src="/sampledog.png" alt="コメントが無い場合のアイコン" width={250} height={260} />
        </Box>
      </VStack>
    </Box>
  );
});
