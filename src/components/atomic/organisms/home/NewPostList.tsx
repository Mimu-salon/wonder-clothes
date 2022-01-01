import { Button, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';
import { SiDatadog } from 'react-icons/si';

import { PostCard } from '../../molecules/PostCard';

const handleMoreLoad = () => {
  // eslint-disable-next-line no-console
  console.log('handleMoreLoad');
};

export const NewPostList: VFC = memo(() => {
  return (
    <>
      <Flex py={10} justifyContent="center" alignItems="center" fontSize="3xl" fontWeight={700}>
        <Icon as={SiDatadog} mr={4} />
        <Text>新規の投稿</Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 2 }} spacing={2} pb={20}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </SimpleGrid>
      <Button my="40px" onClick={handleMoreLoad}>
        もっと見る
      </Button>
    </>
  );
});
