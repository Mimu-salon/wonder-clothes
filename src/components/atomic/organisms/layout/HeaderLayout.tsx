import { Button } from '@chakra-ui/button';
import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import type { VFC } from 'react';
import { memo } from 'react';

import { HeaderUserMenu } from '../../molecules/HeaderUserMenu';
import { Notification } from '../../molecules/Notification';

export const HeaderLayout: VFC = memo(() => {
  return (
    <Heading bg="orange.200" p={{ base: 3, md: 5 }}>
      <Flex align="center" justify="space-between">
        <Link href="/" passHref>
          <Button color="black">ロゴ</Button>
        </Link>
        <Spacer />
        <Box>
          <Notification isNortification />
          <HeaderUserMenu />
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
