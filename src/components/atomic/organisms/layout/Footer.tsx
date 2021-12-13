import { Box, Stack } from '@chakra-ui/layout';
import Link from 'next/link';
import type { VFC } from 'react';
import { memo } from 'react';

export const Footer: VFC = memo(() => {
  return (
    <Stack pt={8}>
      <Stack direction="row" justify="center" fontSize="sm">
        <Box pr={4}>
          <Link href="/about" passHref>
            <a href="replace">使い方</a>
          </Link>
        </Box>
        <Box pr={4}>
          <Link href="/terms" passHref>
            <a href="replace">利用規約</a>
          </Link>
        </Box>
        <Box pr={4}>
          <Link href="/privacy" passHref>
            <a href="replace">プライバシーポリシー</a>
          </Link>
        </Box>
      </Stack>
      <Box textAlign="center" padding={{ base: 4, md: 5 }}>
        <small>&copy; 2021-2022 Takeshi Mimura All Rights Reserved.</small>
      </Box>
    </Stack>
  );
});
