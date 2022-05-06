import { useReactiveVar } from '@apollo/client';
import { Alert, AlertIcon, Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';
import { VscEdit } from 'react-icons/vsc';

import { loginUserVar } from '../../../../apollo/cache';
import type { Users } from '../../../../apollo/graphql';
import { FollowButton } from '../../atoms/FollowButton';
import { UserIcon } from '../../atoms/UserIcon';

type Props = {
  user: Users;
};

export const Profile: VFC<Props> = memo((props) => {
  const { user } = props;

  const router = useRouter();
  const loginUser = useReactiveVar(loginUserVar);
  const isMine = loginUser && loginUser.display_id === user.display_id;

  return (
    <VStack py={8}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '600px', lg: '720px' }}
        height={{ sm: '420px', md: '19rem', lg: '18rem' }}
        alignItems="flex-start"
        direction={{ base: 'column', md: 'row' }}
        bg="white"
        boxShadow={'1xl'}
        padding={6}>
        <Box mr={4}>
          <UserIcon src={user.image} width={120} height={120} />
        </Box>
        <Stack direction="column" w="100%">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Heading fontSize={'2xl'}>{user.name}</Heading>
            {isMine && (
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
            )}
            {loginUser && !isMine && <FollowButton fromUserId={loginUser.id} toUserId={user.id} />}
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
        </Stack>
      </Stack>
    </VStack>
  );
});
