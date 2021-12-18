import { Button } from '@chakra-ui/button';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import { Badge, Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

export const Heros: VFC = memo(() => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      _after={{
        bg: 'brand.500',
        opacity: 0.25,
        pos: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}>
      <Flex direction="column" alignItems="start" justifyContent="center" px={{ base: 4, lg: 20 }} py={24}>
        <Badge color="white" px={3} py={1} mb={3} variant="solid" colorScheme="blue" rounded="full">
          Beta版
        </Badge>
        <Heading
          mb={6}
          fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          color="brand.600"
          lineHeight="shorter">
          犬のファッションを自慢しよう。
        </Heading>
        <Text pr={{ base: 0, lg: 16 }} mb={4} fontSize="sm" letterSpacing="wider">
          「わんだーくろーす」は犬のファッションの共有サイトです。服を着たかわいいワンちゃんを自由に投稿してみよう。
        </Text>
        <Button rightIcon={<ArrowRightIcon />}>テストログイン</Button>
      </Flex>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="トップ画像"
          fit="cover"
          w="full"
          h={{ base: 64, md: 'full' }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  );
});
