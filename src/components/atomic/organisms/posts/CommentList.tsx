/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Flex, Stack, Text, VStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Image from 'next/image';
import type { VFC } from 'react';
import { memo } from 'react';

import { useConvertDateFromHasura } from '../../../hooks/useConvertDateFromHasura';
import { UserIcon } from '../../atoms/UserIcon';

// nameがあればnameを表示、なければdisplayIdを表示
type Props = {
  comments: {
    userIcon?: string | null;
    userName?: string | null;
    userId: string;
    comment: string;
    createdAt: string;
  }[];
};

export const CommentList: VFC<Props> = memo((props) => {
  const { comments } = props;

  return (
    <Box minH="200px">
      {comments.length !== 0 ? (
        <Stack>
          {comments.map((comment) => {
            return (
              <div key={comment.comment}>
                <Stack direction="row" spacing={4} my={4}>
                  <Flex alignItems="flew-start">
                    <UserIcon src={comment.userIcon} width={50} height={50} />
                  </Flex>
                  <Stack direction="column" spacing={0} fontSize="sm">
                    <Text fontWeight={600}>{comment.userName}</Text>
                    <Text color="gray.500">{useConvertDateFromHasura(comment.createdAt)}</Text>
                    <Text whiteSpace="pre-wrap">{comment.comment}</Text>
                  </Stack>
                </Stack>
              </div>
            );
          })}
        </Stack>
      ) : (
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
      )}
    </Box>
  );
});
