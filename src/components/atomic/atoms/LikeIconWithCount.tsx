import type { HTMLChakraProps } from '@chakra-ui/react';
import { Box, chakra, Icon, Text, Tooltip } from '@chakra-ui/react';
import type { HTMLMotionProps } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import type { VFC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

type Props = {
  count: number;
  fontSize: string;
  initial: boolean;
  noAnimation?: boolean;
};

export const LikeIconWithCount: VFC<Props> = memo((props) => {
  const { count, fontSize, initial, noAnimation } = props;

  const [isLike, setIsLike] = useState(initial);

  const control = useAnimation();

  const toggleLike = () => {
    if (noAnimation) {
      return;
    }
    setIsLike((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    if (isLike && !noAnimation) {
      control.start({
        scale: [0.8, 1.5, 1.5, 1.2, 1],
        color: ['#FFF5F5', '#FED7D7', '#FEB2B2', '#FC8181', '#F56565'],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLike]);

  useEffect(() => {
    setIsLike(initial);
  }, [initial]);

  type Merge<P, T> = Omit<P, keyof T> & T;
  type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>;

  const MotionBox: VFC<MotionBoxProps> = motion(chakra.div);

  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="いいね！" bg="gray.500" fontSize="11px">
        <MotionBox
          display="flex"
          cursor="pointer"
          onClick={toggleLike}
          animate={control}
          transition={{ duration: 0.4 }}
          color={isLike ? 'red.400' : ''}>
          <Icon as={isLike ? AiFillHeart : AiOutlineHeart} mr="3px" fontSize={fontSize} />
        </MotionBox>
      </Tooltip>
      <Text fontSize={fontSize}>{count}</Text>
    </Box>
  );
});
