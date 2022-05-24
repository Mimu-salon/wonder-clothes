import { Button } from '@chakra-ui/button';
import { Flex, Heading, Spacer } from '@chakra-ui/layout';
import { Box, useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';

import type { LoginUser } from '../../../../utils/User';
import { HeaderUserMenu } from '../../molecules/HeaderUserMenu';
import { NewPostModal } from '../../molecules/NewPostModal';
import { Notification } from '../../molecules/Notification';

type Props = {
  user: LoginUser;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { user } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const onClickNewPost = () => onOpen();

  return (
    <Heading bg="orange.200" px={{ base: 3, md: 5 }}>
      <Flex align="center" justify="space-between">
        <Box m={0} p={0} cursor="pointer">
          <Link href="/" passHref>
            <a href="replace">
              <Image src={'/logo.png'} alt="タイトルロゴ" width="100px" height="70px" />
            </a>
          </Link>
        </Box>
        <Spacer />
        {user ? (
          <Flex alignItems="center">
            <Notification isNortification />
            <HeaderUserMenu user={user} />
            <Button colorScheme="green" variant="solid" _hover={{ opacity: 0.8 }} onClick={onClickNewPost}>
              投稿
            </Button>
            <NewPostModal isOpen={isOpen} onClose={onClose} />
          </Flex>
        ) : (
          <Box>
            <Button
              colorScheme="green"
              variant="solid"
              _hover={{ opacity: 0.8 }}
              mr={4}
              onClick={() => {
                router.push('/signup');
              }}>
              新規会員登録
            </Button>
            <Button
              colorScheme="green"
              variant="outline"
              bg="white"
              _hover={{ opacity: 0.8 }}
              onClick={() => {
                router.push('/signin');
              }}>
              ログイン
            </Button>
          </Box>
        )}
      </Flex>
    </Heading>
  );
});
