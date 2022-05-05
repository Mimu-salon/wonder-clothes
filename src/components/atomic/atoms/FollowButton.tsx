import { Button } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';
import { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { initializeApollo } from '../../../apollo/client';
import type {
  AddFollowMutation,
  AddFollowMutationVariables,
  RemoveFollowMutation,
  RemoveFollowMutationVariables,
} from '../../../apollo/graphql';
import { useIsFollowUserLazyQuery } from '../../../apollo/graphql';
import { ADD_FOLLOW, REMOVE_FOLLOW } from '../../../apollo/queries';

type Props = {
  fromUserId: string;
  toUserId: string;
};

export const FollowButton: VFC<Props> = memo((props) => {
  const { fromUserId, toUserId } = props;
  const client = initializeApollo();
  const [isFollowed, setIsFollowed] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [getIsFollow, { loading, data }] = useIsFollowUserLazyQuery();

  const variables = {
    fromUserId: fromUserId,
    toUserId: toUserId,
  };

  const checkFollowed = () => {
    getIsFollow({
      variables,
    });
  };

  const handleFollow = async () => {
    await client.mutate<AddFollowMutation, AddFollowMutationVariables>({
      mutation: ADD_FOLLOW,
      variables,
    });
    setIsFollowed(true);
    setIsMouseOver(false);
  };

  const handleUnFollow = async () => {
    await client.mutate<RemoveFollowMutation, RemoveFollowMutationVariables>({
      mutation: REMOVE_FOLLOW,
      variables,
    });
    setIsFollowed(false);
  };

  useEffect(() => {
    checkFollowed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      const isFollow = data.relationships.length !== 0;
      setIsFollowed(isFollow);
    }
  }, [data]);

  if (fromUserId === toUserId) {
    return <></>;
  }

  return (
    <>
      {!loading &&
        (isFollowed ? (
          <Button
            colorScheme="blue"
            size="sm"
            w="90px"
            ml="30px"
            _hover={{ bg: 'red.500' }}
            onMouseOver={() => {
              setIsMouseOver(true);
            }}
            onMouseLeave={() => {
              setIsMouseOver(false);
            }}
            onClick={handleUnFollow}>
            {isMouseOver ? <Fragment>解除</Fragment> : <Fragment>フォロー中</Fragment>}
          </Button>
        ) : (
          <Button colorScheme="blue" variant="outline" size="sm" ml="30px" onClick={handleFollow}>
            フォロー
          </Button>
        ))}
    </>
  );
});
