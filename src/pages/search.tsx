import {
  Box,
  Center,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';

import { useGetSearchResultQuery } from '../apollo/graphql';
import { UserIcon } from '../components/atomic/atoms/UserIcon';
import { PostCard } from '../components/atomic/molecules/PostCard';
import { SearchBar } from '../components/atomic/molecules/SearchBar';
import { SidebarContent } from '../components/atomic/organisms/layout/SidebarContent';
import { Layout } from '../components/atomic/template/Layout';

export const Search: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const { word } = router.query;

  const { data, loading } = useGetSearchResultQuery({
    variables: {
      word: `%${word as string}%`,
    },
  });

  // queryパラメータが存在しない場合トップに戻す
  useEffect(() => {
    if (word == undefined) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title={`「${word}」の検索結果`}>
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
              <Icon as={FiSearch} mr={4} />
              <Text>{`${word as string}の検索結果`}</Text>
            </Flex>

            {loading ? (
              <Center h="100%" w="100%">
                <Spinner />
              </Center>
            ) : (
              data && (
                <Tabs>
                  <TabList borderBottom="1px" borderColor="gray.300" w={{ base: '100vw', md: '90vw', lg: '80vw' }}>
                    <Tab>
                      <Text color="gray.600" fontSize="18px" fontWeight="bold">
                        投稿 {data.posts.length}
                      </Text>
                    </Tab>
                    <Tab>
                      <Text color="gray.600" fontSize="18px" fontWeight="bold">
                        ユーザー {data.users.length}
                      </Text>
                    </Tab>
                  </TabList>

                  {/* 投稿タブ */}
                  <TabPanels>
                    <TabPanel px="0" py="6">
                      {data.posts.length === 0 ? (
                        <VStack spacing={8}>
                          <Text fontSize={{ base: '14px', md: '16px' }} color="gray.500" fontWeight="bold">
                            検索結果はありませんでした
                          </Text>
                          <Image src={'/sampledog.png'} alt={'投稿なし'} width={300} height={320} />
                        </VStack>
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
                      )}
                    </TabPanel>

                    {/* ユーザータブ */}
                    <TabPanel px="0" py="6">
                      {data.users.length === 0 ? (
                        <VStack spacing="5">
                          <Text fontSize={{ base: '14px', md: '16px' }} color="gray.500" fontWeight="bold">
                            検索結果はありませんでした
                          </Text>
                          <Image src={'/sampledog.png'} alt={'投稿なし'} width={300} height={320} />
                        </VStack>
                      ) : (
                        <Center>
                          <Flex>
                            <SimpleGrid columns={[1, 1, 1, 2, 2]} spacingX={7} spacingY={7}>
                              {data.users.map((user) => {
                                return (
                                  <Fragment key={user.display_id}>
                                    <HStack
                                      background="gray.100"
                                      pr="30px"
                                      borderRadius="full"
                                      onClick={() => {
                                        router.push({
                                          pathname: '/[userId]',
                                          query: {
                                            userId: user.display_id,
                                          },
                                        });
                                      }}>
                                      <UserIcon src={user.image} width={70} height={70} />
                                      <Box>
                                        <Text fontSize={{ base: '12px', md: '15px' }} color="black">
                                          {user.name}
                                        </Text>
                                        <Text fontSize="12px" color="gray.500">
                                          @{user.display_id}
                                        </Text>
                                      </Box>
                                    </HStack>
                                  </Fragment>
                                );
                              })}
                            </SimpleGrid>
                          </Flex>
                        </Center>
                      )}
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              )
            )}
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Search;
