import { Button } from '@chakra-ui/button';
import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Avatar, AvatarBadge, Box } from '@chakra-ui/react';
import Link from 'next/link';
import type { VFC } from 'react';
import { memo } from 'react';
import { BsFillBellFill } from 'react-icons/bs';

export const HeaderLayout: VFC = memo(() => {
  const onClickNotification = () => {
    alert('通知機能は現在開発中です。');
  };
  return (
    <Heading bg="orange.200" p={{ base: 3, md: 5 }}>
      <Flex align="center" justify="space-between">
        <Link href="/" passHref>
          <Button color="black">ロゴ</Button>
        </Link>
        <Spacer />
        <Box>
          <Avatar
            icon={<BsFillBellFill />}
            size="md"
            bg="white"
            _hover={{ bg: 'gray.300' }}
            onClick={onClickNotification}
            mr={4}>
            <AvatarBadge boxSize="1.1em" bg="blue.300" />
          </Avatar>
          <Avatar size="md" name="ユーザーの名前" _hover={{ opacity: 0.8 }} src="https://bit.ly/dan-abramov" mr={4} />
          <Button colorScheme="green" variant="solid" _hover={{ opacity: 0.8 }}>
            投稿
          </Button>
        </Box>
        <Box>
          <Link href="/signup" passHref>
            <Button colorScheme="green" variant="solid" _hover={{ opacity: 0.8 }} mr={4}>
              新規会員登録
            </Button>
          </Link>
          <Link href="/signin" passHref>
            <Button colorScheme="green" variant="outline" bg="white" _hover={{ opacity: 0.8 }}>
              ログイン
            </Button>
          </Link>
        </Box>
      </Flex>
    </Heading>
  );
});
