import { Menu, MenuButton, MenuGroup, MenuList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';

import { loginUserVar } from '../../../apollo/cache';
import { onLogout } from '../../../apollo/client';
import { auth } from '../../../firebase/firebaseConfig';
import type { LoginUser } from '../../../utils/User';
import { unSubMeta } from '../../hooks/userUserChanged';
import { HeaderUserMenuIcon } from '../atoms/HeaderUserMenuIcon';
import { UserIcon } from '../atoms/UserIcon';

type Props = {
  user: LoginUser;
};

export const HeaderUserMenu: VFC<Props> = memo((props) => {
  const { user } = props;
  const router = useRouter();

  const handleLogout = async () => {
    if (unSubMeta) {
      unSubMeta();
    }
    await auth.signOut();
    loginUserVar(null);
    // eslint-disable-next-line no-console
    console.log(loginUserVar());
    onLogout();
    router.push('/about');
  };

  return (
    <Menu isLazy id="header-user-menu">
      <MenuButton mr={4} my={0}>
        {user?.image ? (
          <UserIcon src={user.image} width={50} height={50} />
        ) : (
          <UserIcon src={'/sampledog.png'} width={50} height={50} />
        )}
      </MenuButton>
      <MenuList fontSize="sm" pb={0}>
        <MenuGroup title={`${user?.name} さん` ?? 'guest'}>
          <HeaderUserMenuIcon
            onClick={() => {
              router.push(`/${user?.display_id}`);
            }}>
            マイページ
          </HeaderUserMenuIcon>
          <HeaderUserMenuIcon
            onClick={() => {
              router.push(`/setting/account`);
            }}>
            アカウント設定
          </HeaderUserMenuIcon>
          <HeaderUserMenuIcon onClick={handleLogout}>ログアウト</HeaderUserMenuIcon>
          <HeaderUserMenuIcon onClick={() => alert('カラーモード変更は現在開発中です')}>
            カラーモード変更
          </HeaderUserMenuIcon>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
});
