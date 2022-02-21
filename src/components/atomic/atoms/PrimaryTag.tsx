import { Tag } from '@chakra-ui/react';
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';

type Props = {
  children: ReactNode;
};

export const PrimaryTag: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Tag bg="gray.200" p={1.5} borderRadius="8px" fontSize="13px" cursor="pointer" _hover={{ bg: 'gray.300' }}>
      {children}
    </Tag>
  );
});
