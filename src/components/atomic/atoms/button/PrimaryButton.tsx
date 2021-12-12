import { Button } from '@chakra-ui/button';
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';

type Props = {
  colorScheme: string;
  variant: string;
  bg?: string;
  mr?: number;
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { colorScheme, variant, mr, bg, children } = props;
  return (
    <Button colorScheme={colorScheme} variant={variant} mr={mr} bg={bg} _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  );
});
