import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { UserIcon } from '../../atoms/UserIcon';
import { EditMenu } from '../../molecules/EditMenu';

export const PostDetailUserCard: VFC = memo(() => {
  const router = useRouter();
  return (
    <VStack py={8}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '600px', lg: '720px' }}
        height={{ sm: '100px', md: '6rem', lg: '6rem' }}
        alignItems="flex-start"
        direction="row"
        bg="white"
        boxShadow={'1xl'}
        padding={3}>
        <Box mr={1}>
          <UserIcon src="/sampledog.png" width={65} height={65} />
        </Box>
        <Stack direction="column" w="100%">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Heading fontSize={{ base: '1xl', md: '2xl' }}>Lindsey James</Heading>
            <Button
              size="sm"
              leftIcon={<AiOutlinePlus />}
              colorScheme="blue"
              variant="outline"
              opacity={0.8}
              boxShadow="md"
              onClick={() => {
                router.push('/setting/account');
              }}>
              フォロー
            </Button>
            <EditMenu />
          </Stack>
          <Text fontWeight={600} fontSize="xs" color="gray.500" size="sm" mb={4}>
            @lindsey_jam3s
          </Text>
        </Stack>
      </Stack>
    </VStack>
  );
});
