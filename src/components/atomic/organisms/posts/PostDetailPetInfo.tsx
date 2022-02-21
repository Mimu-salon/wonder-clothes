import { Box, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import type { VFC } from 'react';
import { memo } from 'react';

import { CommentIconWithCount } from '../../atoms/CommentIconWithCount';
import { LikeIconWithCount } from '../../atoms/LikeIconWithCount';
import { PrimaryTag } from '../../atoms/PrimaryTag';

type Props = {
  onClick: () => void;
};

export const PostDetailPetInfo: VFC<Props> = memo((props) => {
  const { onClick } = props;
  return (
    <VStack>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ base: '95vw', md: '540px' }}
        height={{ sm: '110px', md: '6rem' }}
        alignItems="center"
        justifyContent="center"
        bg="white"
        boxShadow={'1xl'}
        padding={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Text fontSize="22px">
            チロル
            <Box as="span" fontSize="14px" pl={1}>
              ちゃん
            </Box>
          </Text>
          <Text fontSize="14px" color="gray.500">
            2022/02/18 12:34
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <HStack>
            <Link
              href={{
                pathname: '/weight/[weightId]',
              }}>
              <a href="replace">
                <PrimaryTag>#小型犬</PrimaryTag>
              </a>
            </Link>
            <Link
              href={{
                pathname: '/recommend/[recommendId]',
              }}>
              <a href="replace">
                <PrimaryTag>#おすすめしたい！</PrimaryTag>
              </a>
            </Link>
          </HStack>
          <CommentIconWithCount fontSize="18px" count={5} onClick={onClick} />
          <LikeIconWithCount fontSize="18px" count={14} initial={false} />
        </Stack>
      </Stack>
    </VStack>
  );
});
