import { Avatar, AvatarBadge, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';
import { BsFillBellFill } from 'react-icons/bs';

type Props = {
  isNortification: boolean;
};

export const Notification: VFC<Props> = memo((props) => {
  return (
    <Menu isLazy>
      <MenuButton>
        <Avatar icon={<BsFillBellFill />} size="md" bg="white" cursor="pointer" _hover={{ bg: 'gray.300' }} mr={4}>
          {props.isNortification && <AvatarBadge boxSize="1.1em" bg="blue.300" />}
        </Avatar>
      </MenuButton>
      <MenuList fontSize="sm">
        <MenuItem>通知機能は現在開発中です。</MenuItem>
      </MenuList>
    </Menu>
  );
});
