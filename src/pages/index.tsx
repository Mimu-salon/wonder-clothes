import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import React, { Fragment, useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { SiDatadog } from 'react-icons/si';

import { addApolloState, initializeApollo } from '../apollo/client';
import type { GetAllPostQuery, GetAllPostQueryVariables } from '../apollo/graphql';
import { useGetAllPostQuery } from '../apollo/graphql';
import { GET_ALL_POST } from '../apollo/queries';
import { HomeTab } from '../components/atomic/molecules/HomeTab';
import { PostCard } from '../components/atomic/molecules/PostCard';
import { SearchBar } from '../components/atomic/molecules/SearchBar';
import { SidebarContent } from '../components/atomic/organisms/layout/SidebarContent';
import { Layout } from '../components/atomic/template/Layout';

const LIMIT_OFFSET = 12;

export const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [offset, setOffset] = useState(LIMIT_OFFSET);
  const [posts, setPosts] = useState<GetAllPostQuery['posts']>([]);

  const { data, fetchMore } = useGetAllPostQuery({
    variables: {
      limit: LIMIT_OFFSET,
      offset: 0,
    },
  });

  const handleMoreLoad = async () => {
    setOffset((prev) => {
      return prev + LIMIT_OFFSET;
    });
    const addData = await fetchMore({
      variables: {
        limit: LIMIT_OFFSET,
        offset: offset,
      },
    });
    if (addData) {
      setPosts((prev) => {
        return [...prev, ...addData.data.posts];
      });
    }
  };

  useEffect(() => {
    if (data) {
      setPosts(data.posts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="わんだーくろーす | 愛犬ファッション共有SNS">
      <Flex>
        <Box minH="100vh">
          {/* PC：md時のsidebar */}
          <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
          {/* スマホ：base時のdrawer */}
          <Drawer
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full">
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            pos="fixed"
            top="85%"
            left="80%"
            w="50px"
            h="50px"
            borderRadius="50%"
            shadow="xl"
            _hover={{ bg: 'gray.300' }}
            variant="solid"
            onClick={onOpen}
            aria-label="サイドバーを開く"
            icon={<FiMenu />}
          />
        </Box>
        <Box p={4} textAlign="center" w="1200px" mx="auto">
          <SearchBar />
          <Box>
            <Flex py={10} justifyContent="center" alignItems="center" fontSize="3xl" fontWeight={700}>
              <Icon as={SiDatadog} mr={4} />
              <Text>新規の投稿</Text>
            </Flex>
            <HomeTab now="timeline" />
            <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 2 }} spacing={2} pb={20}>
              {posts.map((post) => {
                return (
                  <Fragment key={post.id}>
                    <PostCard
                      imageSrc={post.image}
                      postId={post.id}
                      text={post.content}
                      userIcon={post.user.image ?? '/sampledog.png'}
                      userName={post.user.name}
                      userId={post.user.display_id}
                      commentCount={post.post_comments_aggregate.aggregate?.count as number}
                      likeCount={post.post_likes_aggregate.aggregate?.count as number}
                    />
                  </Fragment>
                );
              })}
            </SimpleGrid>
            <Button my="40px" onClick={handleMoreLoad}>
              もっと見る
            </Button>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const client = initializeApollo();
  await client.query<GetAllPostQuery, GetAllPostQueryVariables>({
    query: GET_ALL_POST,
    variables: {
      limit: LIMIT_OFFSET,
      offset: 0,
    },
  });
  return addApolloState(client, { props: {}, revalidate: 300 });
};
