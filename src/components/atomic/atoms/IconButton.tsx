import { Button, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
import type { ReactNode, VFC } from 'react';
import type { IconType } from 'react-icons';
import { FaTwitter } from 'react-icons/fa';

export type IconButtonProps = {
  children: ReactNode;
  bg: string;
  color: string;
  border: string;
  borderColor?: string;
  icon: IconType;
  iconPosition: 'left' | 'right';
  fontWeight?: string;
  onClick?: () => void;
};

const IconButton: VFC<IconButtonProps> = (props: IconButtonProps) => {
  const { children, bg, color, border, borderColor, icon, iconPosition, fontWeight, onClick } = props;
  const iconColor = css`
    ${icon === FaTwitter ? `color: #55ACEE;` : ``}
  `;

  return (
    <Button
      bg={bg}
      color={color}
      border={border}
      borderColor={borderColor}
      variant="outline"
      fontSize={{ base: '12px', sm: '14px' }}
      w={{ base: '180px', sm: '250px' }}
      borderRadius="5px"
      fontWeight={fontWeight}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}>
      {iconPosition === 'left' ? (
        <>
          <Text fontSize="lg" mr="3" css={iconColor}>
            <props.icon />
          </Text>
          {children}
        </>
      ) : (
        <>
          {children}
          <Text fontSize="lg" ml="3">
            <props.icon />
          </Text>
        </>
      )}
    </Button>
  );
};

export { IconButton };
