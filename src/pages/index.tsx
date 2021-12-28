import { Box, Drawer, DrawerContent, IconButton, useDisclosure } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { SidebarContent } from '../components/atomic/organisms/layout/SidebarContent';
import { Layout } from '../components/atomic/template/Layout';

export const Home: NextPage = (props) => {
  const { children } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout title="わんだーくろーす | 愛犬ファッション共有SNS">
      <Box h="100vh">
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
          shadow="lg"
          _hover={{ bg: 'gray.300' }}
          variant="outline"
          onClick={onOpen}
          aria-label="サイドバーを開く"
          icon={<FiMenu />}
        />
        <Box ml={{ base: 0, md: 60 }} p={4}>
          {children}
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
