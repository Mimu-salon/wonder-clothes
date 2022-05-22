import { Badge, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import type { VFC } from 'react';
import { memo } from 'react';

import { TestLoginButton } from '../../atoms/TestLoginButton';

export const Hero: VFC = memo(() => {
  return (
    <Flex
      w={'full'}
      h={{ base: '400px', md: '600px', lg: '800px' }}
      backgroundImage={'/hero.jpg'}
      backgroundSize={'cover'}
      backgroundPosition={'center'}>
      <VStack
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.800, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={4}>
          <Badge color="white" px={3} py={1} mb={3} variant="solid" colorScheme="blue" rounded="full">
            Beta版
          </Badge>
          <Heading
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            わんだーくろーす <br />
            -犬のファッションを自慢しよう-
          </Heading>
          <Text color={'white'} fontSize="sm">
            「わんだーくろーす」は犬のファッションの共有サイトです。
            <br />
            服を着たかわいいワンちゃんを自由に投稿してみよう。
          </Text>
          <TestLoginButton />
        </Stack>
      </VStack>
    </Flex>
  );
});
