import { Box, Flex, Icon, Text, Tooltip } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';
import { FaRegComment } from 'react-icons/fa';

type Props = {
  fontSize: string;
  onClick?: () => void;
  count: number;
};

export const CommentIconWithCount: VFC<Props> = memo((props) => {
  const { count, fontSize, onClick } = props;
  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="コメントする" bg="gray.500" fontSize="11px">
        <Flex>
          <Icon as={FaRegComment} cursor="pointer" mr="3px" fontSize={fontSize} onClick={onClick} />
        </Flex>
      </Tooltip>
      <Text fontSize={fontSize}>{count}</Text>
    </Box>
  );
});
