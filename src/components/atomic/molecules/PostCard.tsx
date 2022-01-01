import { Avatar, Box, Center, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import type { VFC } from 'react';
import { memo } from 'react';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

import sampledog from '../../../../public/sampledog.png';

export const PostCard: VFC = memo(() => {
  const toPostDetailPage = () => {
    // eslint-disable-next-line no-console
    console.log('toPostDetailPage');
  };
  const toUserDetailPage = () => {
    // eslint-disable-next-line no-console
    console.log('toUserDetailPage');
  };
  return (
    <Center py={1}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ base: '330px', md: '540px' }}
        height={{ md: '320px' }}
        direction={{ base: 'column', md: 'row' }}
        bg="white"
        boxShadow="2xl"
        padding={4}>
        <Flex flex={1} bg="blue.200" cursor="pointer" onClick={toPostDetailPage}>
          <Image objectFit="contain" width={300} height={260} src={sampledog} alt="投稿画像" priority />
        </Flex>
        <Stack flex={1} flexDirection="column">
          <Stack direction="row" spacing={4} align="center" cursor="pointer" onClick={toUserDetailPage}>
            <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} alt={'ユーザー画像'} />
            <Stack direction="column" spacing={0} fontSize="sm">
              <Text textAlign="left" fontWeight={600}>
                UserName
              </Text>
              <Text color="gray.500">2020/01/01 12:34</Text>
            </Stack>
          </Stack>
          <Box px={1} cursor="pointer" onClick={toPostDetailPage}>
            <Text color="gray.700" textAlign="left" fontSize="sm">
              テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。テキスト。
            </Text>
          </Box>
          <Stack direction="row" spacing={4} justifyContent="right">
            <Icon
              fontSize="20"
              _hover={{
                color: 'white',
              }}
              as={FaRegComment}
            />
            <Icon
              fontSize="20"
              _hover={{
                color: 'white',
              }}
              as={FaRegHeart}
            />
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
});
