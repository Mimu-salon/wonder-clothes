import { Box, Heading } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';

import { CommentForm } from '../../molecules/CommentForm';
import { CommentList } from '../../molecules/CommentList';

export const PostDetailComment: VFC = memo(() => {
  return (
    <Box w={{ base: '95vw', md: '540px' }} px="20px">
      <CommentForm />
      <Heading fontSize="20px" color="gray.700" my={3}>
        コメント(0)
      </Heading>
      <CommentList />
    </Box>
  );
});
