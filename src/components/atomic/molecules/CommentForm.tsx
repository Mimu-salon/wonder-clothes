import { Box, Button, Textarea } from '@chakra-ui/react';
import type { VFC } from 'react';
import { useState } from 'react';
import { memo } from 'react';

export const CommentForm: VFC = memo(() => {
  const [comment, setComment] = useState('');
  const [disabled, setDisabeld] = useState(true);

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setComment(text);
    setDisabeld(text.length === 0 || text.length > 100);
  };
  return (
    <>
      <Textarea
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
    </>
  );
});
