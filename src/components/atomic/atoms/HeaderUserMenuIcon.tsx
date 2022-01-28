import { MenuDivider, MenuItem } from '@chakra-ui/react';
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const HeaderUserMenuIcon: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <>
      <MenuDivider p={0} m={0} borderColor="gray.300" />
      <MenuItem
        py={4}
        borderRadius="lg"
        _hover={{
          bg: 'gray.200',
        }}
        onClick={onClick}>
        {children}
      </MenuItem>
    </>
  );
});
