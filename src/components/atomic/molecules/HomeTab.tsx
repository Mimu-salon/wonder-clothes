import { Box, Center, Heading, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import type { VFC } from 'react';
import { memo } from 'react';

type Props = {
  now: 'timeline' | 'feed';
};

export const HomeTab: VFC<Props> = memo((props) => {
  const { now } = props;

  return (
    <Center bg="orange.50" borderRadius="100px" my="10px" mx={{ base: '0px', md: '10px', lg: '20px' }}>
      <Box py={{ base: '10px', md: '20px' }} px={{ base: '10px', md: '40px' }} flexDir="column">
        <HStack spacing={7} color="gray.600" mb="10px">
          <Link href="/">
            <a href="replace">
              <Heading
                fontSize={{ base: '18px', md: '20px' }}
                color={now === 'timeline' ? '#8C5A30' : ''}
                borderBottom={now === 'timeline' ? '2px' : ''}>
                タイムライン
              </Heading>
            </a>
          </Link>
          <Link href="/feed">
            <a href="replace">
              <Heading
                fontSize={{ base: '18px', md: '20px' }}
                color={now === 'feed' ? '#8C5A30' : ''}
                borderBottom={now === 'feed' ? '2px' : ''}>
                フォローユーザー
              </Heading>
            </a>
          </Link>
        </HStack>
      </Box>
    </Center>
  );
});
