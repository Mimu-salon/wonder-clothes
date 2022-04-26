import { Circle } from '@chakra-ui/react';
import Image from 'next/image';
import type { VFC } from 'react';
import { memo } from 'react';

import sampledog from '../../../../public/sampledog.png';

export type UserIconProps = {
  src?: string | null;
  width: number;
  height: number;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
};

export const UserIcon: VFC<UserIconProps> = memo((props) => {
  const { src, width, height, onClick } = props;
  return (
    <Circle w={width + 'px'} h={height + 'px'} overflow="hidden" onClick={onClick}>
      {src ? (
        <Image src={src} alt="ユーザアイコン" width={width} height={height} />
      ) : (
        <Image src={sampledog} alt="アイコン設定していない場合のサンプルアイコン" width={width} height={height} />
      )}
    </Circle>
  );
});
