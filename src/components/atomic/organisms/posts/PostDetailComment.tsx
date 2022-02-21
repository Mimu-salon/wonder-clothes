import { Box, Button, Heading, Textarea } from '@chakra-ui/react';
import type { RefObject, VFC } from 'react';
import { useState } from 'react';
import { memo } from 'react';

import { CommentList } from '../../molecules/CommentList';

type Props = {
  commentInput?: RefObject<HTMLTextAreaElement>;
};

export const PostDetailComment: VFC<Props> = memo((props) => {
  const { commentInput } = props;

  const [comment, setComment] = useState('');
  const [disabled, setDisabeld] = useState(true);
  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setComment(text);
    setDisabeld(text.length === 0 || text.length > 100);
  };
  return (
    <Box w={{ base: '95vw', md: '540px' }} px="20px">
      <Textarea
        ref={commentInput}
        placeholder="コメントを書く（100文字以内）"
        h="150px"
        borderColor="gray.400"
        value={comment}
        onChange={(e) => {
          onChangeComment(e);
        }}
      />
      <Box textAlign="right" mt={2}>
        <Button colorScheme="teal" isDisabled={disabled}>
          送信
        </Button>
      </Box>
      <Heading fontSize="20px" color="gray.700" my={3}>
        コメント(0)
      </Heading>
      <CommentList />
    </Box>
  );
});
