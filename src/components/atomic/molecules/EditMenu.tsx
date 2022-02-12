import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';

import { NewPostModal } from './NewPostModal';

export const EditMenu: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickDelete = () => {
    if (confirm('本当に削除しますか？')) {
      alert('削除');
    }
  };

  return (
    <>
      <Menu isLazy id="edit-menu">
        <MenuButton px="6px" _hover={{ bg: 'gray.100' }}>
          <HamburgerIcon color="gray.600" w="26px" h="26px" />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onOpen}>投稿を編集</MenuItem>
          <MenuItem onClick={onClickDelete}>投稿を削除</MenuItem>
        </MenuList>
        {/* 投稿時のModalを表示 */}
        <NewPostModal isOpen={isOpen} onClose={onClose} />
      </Menu>
    </>
  );
});
