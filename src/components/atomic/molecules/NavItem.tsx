import { Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';
import type { IconType } from 'react-icons';

type Props = {
  href: string;
  icon: IconType;
  children: ReactNode;
};
export const NavItem: VFC<Props> = memo((props) => {
  const { href, icon, children } = props;
  return (
    <Link href={href} passHref>
      <Flex
        align="center"
        fontSize="sm"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
});
