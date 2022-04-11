import { Menu, MenuButton, MenuGroup, MenuList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';

import { onLogout } from '../../../apollo/client';
import { auth } from '../../../firebase/firebaseConfig';
import { unSubMeta } from '../../hooks/userUserChanged';
import { HeaderUserMenuIcon } from '../atoms/HeaderUserMenuIcon';
import { UserIcon } from '../atoms/UserIcon';

export const HeaderUserMenu: VFC = memo(() => {
  const router = useRouter();

  const handleLogout = async () => {
    if (unSubMeta) {
      unSubMeta();
    }
    await auth.signOut();
    onLogout();
    router.push('/about');
  };

  return (
    <Menu isLazy id="header-user-menu">
      <MenuButton mr={4} my={0}>
        <UserIcon src="/sampledog.png" width={50} height={50} />
      </MenuButton>
      <MenuList fontSize="sm" pb={0}>
        <MenuGroup title="ユーザーさん">
          <HeaderUserMenuIcon onClick={() => alert('マイページに遷移')}>マイページ</HeaderUserMenuIcon>
          <HeaderUserMenuIcon onClick={() => alert('アカウント設定に遷移')}>アカウント設定</HeaderUserMenuIcon>
          <HeaderUserMenuIcon onClick={handleLogout}>ログアウト</HeaderUserMenuIcon>
          <HeaderUserMenuIcon onClick={() => alert('カラーモード変更')}>カラーモード変更</HeaderUserMenuIcon>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
});
