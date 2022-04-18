import { Circle } from '@chakra-ui/react';
import Image from 'next/image';
import type { VFC } from 'react';
import { memo } from 'react';

export type UserIconProps = {
  src: string;
  width: number;
  height: number;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const UserIcon: VFC<UserIconProps> = memo((props) => {
  const { src, width, height, onClick } = props;
  return (
    <Circle w={width + 'px'} h={height + 'px'} overflow="hidden" onClick={onClick}>
      <Image src={src} alt="ユーザアイコン" width={width} height={height} />
    </Circle>
  );
});
