import { Box, Text } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';

export const PostDetailContent: VFC = memo(() => {
  return (
    <Box
      w={{ base: '95vw', md: '540px' }}
      mb="50px"
      p="20px"
      borderRadius="20px"
      boxShadow="0px 0px 5px rgba(40,40,40,0.15)">
      <Text fontSize="18px" color="gray.700" whiteSpace="pre-wrap">
        テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。
      </Text>
    </Box>
  );
});
