import { Button } from '@chakra-ui/button';
import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import type { VFC } from 'react';
import { memo } from 'react';

import { PrimaryButton } from '../../atoms/button/PrimaryButton';

export const Header: VFC = memo(() => {
  return (
    <Heading bg="orange.200" p={{ base: 3, md: 5 }}>
      <Flex align="center" justify="space-between">
        <Link href="/" passHref>
          <Button color="black">ロゴ</Button>
        </Link>
        <Spacer />
        <Box>
          <Link href="/signup" passHref>
            <PrimaryButton colorScheme="green" variant="solid" mr={4}>
              新規会員登録
            </PrimaryButton>
          </Link>
          <Link href="/signin" passHref>
            <PrimaryButton colorScheme="green" variant="outline" bg="white">
              ログイン
            </PrimaryButton>
          </Link>
        </Box>
      </Flex>
    </Heading>
  );
});
