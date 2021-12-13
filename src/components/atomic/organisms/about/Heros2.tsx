import { Button } from '@chakra-ui/button';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Badge, Flex, Stack, Text, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import type { VFC } from 'react';
import { memo } from 'react';

export const Heros2: VFC = memo(() => {
  return (
    <Flex
      w={'full'}
      h={'500'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={{ base: 'left', md: 'center' }}>
      <VStack
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={4}>
          <Badge color="white" px={3} py={1} mb={3} variant="solid" colorScheme="blue" rounded="full">
            Beta版
          </Badge>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            犬のファッションを自慢しよう。
          </Text>
          <Text color={'white'} fontSize="sm">
            「わんだーくろーす」は犬のファッションの共有サイトです。
            <br />
            服を着たかわいいワンちゃんを自由に投稿してみよう。
          </Text>
          <Button rightIcon={<ArrowRightIcon />} bg={'white'} color={'blue'} _hover={{ bg: 'blue.500' }}>
            テストログイン
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
});
