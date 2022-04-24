import { useReactiveVar } from '@apollo/client';
import { Alert, AlertIcon, Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';
import { VscEdit } from 'react-icons/vsc';

import { loginUserVar } from '../../../../apollo/cache';
import type { Users } from '../../../../apollo/graphql';
import { useGetUserInfomationQuery } from '../../../../apollo/graphql';
import { UserIcon } from '../../atoms/UserIcon';

type UserInfo = {
  post: number;
  follow: number;
  follower: number;
};

type Props = {
  user: Users;
};

const initialUserInfo = {
  post: 0,
  follow: 0,
  follower: 0,
};

export const Profile: VFC<Props> = memo((props) => {
  const { user } = props;
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);
  const router = useRouter();
  const loginUser = useReactiveVar(loginUserVar);
  const isMine = loginUser && loginUser.display_id === user.display_id;

  const query = { userId: user.display_id };
  const transitions = {
    toFollow: () => {
      router.push({ pathname: '/[userId]/followings', query });
    },
    toFollower: () => {
      router.push({ pathname: '/[userId]/followers', query });
    },
  };

  // pathのユーザのdisplay_idを元に集計値をQuery(GET_USER_INFOMATION)
  const { data, loading } = useGetUserInfomationQuery({
    variables: {
      display_id: user.display_id,
    },
  });

  useEffect(() => {
    if (!loading) {
      const user = data?.users[0];
      if (user) {
        setUserInfo({
          post: user.posts_aggregate.aggregate?.count ?? 0,
          follow: user.following_aggregate.aggregate?.count ?? 0,
          follower: user.followed_aggregate.aggregate?.count ?? 0,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <VStack py={8}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '600px', lg: '720px' }}
        height={{ sm: '450px', md: '21rem', lg: '20rem' }}
        alignItems="flex-start"
        direction={{ base: 'column', md: 'row' }}
        bg="white"
        boxShadow={'1xl'}
        padding={6}>
        <Box mr={4}>
          <UserIcon src={user.image ?? '/sampledog.png'} width={120} height={120} />
        </Box>
        <Stack direction="column" w="100%">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Heading fontSize={'2xl'}>{user.name}</Heading>
            {isMine ? (
              <Button
                size="sm"
                leftIcon={<VscEdit />}
                color="gray.500"
                variant="outline"
                opacity={0.9}
                boxShadow="md"
                onClick={() => {
                  router.push('/setting/account');
                }}>
                編集
              </Button>
            ) : (
              <Button>フォロー</Button>
            )}
          </Stack>
          <Text fontWeight={600} color="gray.500" size="sm" mb={4}>
            @{user.display_id}
          </Text>
          <Box minH={{ sm: '150px', md: '165px', lg: '150px' }} px={1}>
            {user.profile ? (
              <Text color="gray.700">{user.profile}</Text>
            ) : (
              <Alert status="info" fontSize="14px" color="gray.600" bg="#E0F1FB" borderRadius="md">
                <AlertIcon />
                まだプロフィールは設定されていません
              </Alert>
            )}
          </Box>
          <Stack direction="row" spacing={10} pt={2}>
            <Stack spacing={0} alignItems="center">
              <Text color="gray.700" fontWeight={600}>
                投稿数
              </Text>
              <Text fontSize="md" color="gray.500">
                {userInfo.post}
              </Text>
            </Stack>
            <Stack
              spacing={0}
              alignItems="center"
              borderRadius="5px"
              onClick={transitions.toFollow}
              cursor="pointer"
              _hover={{ bg: 'blue.100' }}>
              <Text color="gray.700" fontWeight={600}>
                フォロー
              </Text>
              <Text fontSize="md" color="gray.500">
                {userInfo.follow}
              </Text>
            </Stack>
            <Stack
              spacing={0}
              alignItems="center"
              borderRadius="5px"
              onClick={transitions.toFollower}
              cursor="pointer"
              _hover={{ bg: 'blue.100' }}>
              <Text color="gray.700" fontWeight={600}>
                フォロワー
              </Text>
              <Text fontSize="md" color="gray.500">
                {userInfo.follower}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </VStack>
  );
});
