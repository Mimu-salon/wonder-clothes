import { Box, Drawer, DrawerContent, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { SearchBar } from '../components/atomic/molecules/SearchBar';
import { NewPostList } from '../components/atomic/organisms/home/NewPostList';
import { SidebarContent } from '../components/atomic/organisms/layout/SidebarContent';
import { Layout } from '../components/atomic/template/Layout';

export const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <NewPostList />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Home;
