import { useReactiveVar } from '@apollo/client';
import { Box, Textarea } from '@chakra-ui/react';
import type { RefObject, VFC } from 'react';
import { memo } from 'react';
import { useState } from 'react';

import { loginUserVar } from '../../../../apollo/cache';
import { initializeApollo } from '../../../../apollo/client';
import type { AddPostCommentMutation, AddPostCommentMutationVariables } from '../../../../apollo/graphql';
import { ADD_POST_COMMENT } from '../../../../apollo/queries';
import { PrimaryButton } from '../../atoms/PrimaryButton';

type Props = {
  postId?: string;
  commentInput?: RefObject<HTMLTextAreaElement>;
};

export const CommentForm: VFC<Props> = memo((props) => {
  const { postId, commentInput } = props;
  const [comment, setComment] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(true);
  const loginUser = useReactiveVar(loginUserVar);
  const client = initializeApollo();

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setComment(text);
    setDisableSubmit(text.length === 0 || text.length > 100);
  };

  const handleSubmit = async () => {
    if (postId) {
      await client.mutate<AddPostCommentMutation, AddPostCommentMutationVariables>({
        mutation: ADD_POST_COMMENT,
        variables: {
          userId: loginUser?.id as string,
          postId: postId as string,
          comment: comment,
        },
      });
      setComment('');
    }
  };

  return (
    <>
      {loginUser ? (
        <>
          <Textarea
            ref={commentInput}
            placeholder="コメントを書く（100文字以内）"
            borderColor="gray.400"
            h="150px"
            onChange={(e) => {
              handleCommentChange(e);
            }}
            value={comment}
          />
          <Box textAlign="right" mt={2}>
            <PrimaryButton disabled={disableSubmit} onClick={handleSubmit}>
              送信
            </PrimaryButton>
          </Box>
        </>
      ) : (
        <>
          <Textarea
            isReadOnly
            ref={commentInput}
            placeholder="コメントを投稿するにはログインが必要です"
            borderColor="gray.400"
            h="150px"
            onChange={(e) => {
              handleCommentChange(e);
            }}
            value={comment}
          />
        </>
      )}
    </>
  );
});
