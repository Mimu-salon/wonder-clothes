import { Avatar, Menu, MenuButton, MenuGroup, MenuList } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';

import { HeaderUserMenuIcon } from '../atoms/HeaderUserMenuIcon';

export const HeaderUserMenu: VFC = memo(() => {
  return (
    <Menu isLazy id="header-user-menu">
      <MenuButton>
        <Avatar size="md" name="ユーザーの名前" _hover={{ opacity: 0.8 }} src="https://bit.ly/dan-abramov" mr={4} />
      </MenuButton>
      <MenuList fontSize="sm" pb={0}>
        <MenuGroup title="ユーザーさん">
          <HeaderUserMenuIcon onClick={() => alert('マイページに遷移')}>マイページ</HeaderUserMenuIcon>
          <HeaderUserMenuIcon onClick={() => alert('アカウント設定に遷移')}>アカウント設定</HeaderUserMenuIcon>
          <HeaderUserMenuIcon onClick={() => alert('ログアウト')}>ログアウト</HeaderUserMenuIcon>
          <HeaderUserMenuIcon onClick={() => alert('カラーモード変更')}>カラーモード変更</HeaderUserMenuIcon>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
});
