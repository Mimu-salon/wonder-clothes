import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  IconButton,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import React, { Fragment, useEffect } from 'react';
import { FaDog } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import { useGetSmallDogPostLazyQuery } from '../../apollo/graphql';
import { PostCard } from '../../components/atomic/molecules/PostCard';
import { SearchBar } from '../../components/atomic/molecules/SearchBar';
import { SidebarContent } from '../../components/atomic/organisms/layout/SidebarContent';
import { Layout } from '../../components/atomic/template/Layout';

export const Small: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [getSmall, { loading, data }] = useGetSmallDogPostLazyQuery();

  useEffect(() => {
    getSmall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title="小型犬の投稿 | わんだーくろーす">
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
              <Icon as={FaDog} mr={4} />
              <Text>小型犬(10kg未満)</Text>
            </Flex>
            {!loading && data ? (
              data.posts.length === 0 ? (
                <Alert
                  status="warning"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="200px">
                  <AlertIcon boxSize="40px" mr={0} />
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                    小型犬(10kg未満)の投稿はありません
                  </AlertTitle>
                </Alert>
              ) : (
                <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 2 }} spacing={2} pb={20}>
                  {data?.posts.map((post) => {
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
              )
            ) : (
              <Center h="100%" w="100%">
                <Spinner />
              </Center>
            )}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Small;
