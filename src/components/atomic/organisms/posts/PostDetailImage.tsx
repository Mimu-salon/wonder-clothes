import { Box, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';
import type { VFC } from 'react';
import { memo } from 'react';

export const PostDetailImage: VFC = memo(() => {
  return (
    <Box position="relative">
      <Center
        w={{ base: '330px', md: '430px' }}
        h={{ base: '520px', md: '630px' }}
        position="relative"
        mx="10px"
        borderRadius="20px">
        <Image src={'/sampledog.png'} alt="愛犬ファッション投稿画像" layout="fill" objectFit="contain" />
        <Center bg="gray.50" w="100%" h="100%" borderRadius="inherit">
          <Text fontWeight="bold" fontSize="24px" color="gray.600">
            No Image
          </Text>
        </Center>
      </Center>
    </Box>
  );
});
