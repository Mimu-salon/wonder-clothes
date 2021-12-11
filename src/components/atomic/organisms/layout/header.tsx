import { Button } from '@chakra-ui/button';
import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import type { VFC } from 'react';
import { memo } from 'react';

export const Header: VFC = memo(() => {
  return (
    <Heading bg="orange.300" p={{ base: 3, md: 5 }}>
      <Flex align="center" justify="space-between">
        <Link href="/" passHref>
          <Button color="black">ロゴ</Button>
        </Link>
        <Spacer />
        <Box>
          <Link href="/signup" passHref>
            <Button colorScheme="teal" mr="4">
              新規会員登録
            </Button>
          </Link>
          <Link href="/signin" passHref>
            <Button colorScheme="teal">ログイン</Button>
          </Link>
        </Box>
      </Flex>
    </Heading>
  );
});
