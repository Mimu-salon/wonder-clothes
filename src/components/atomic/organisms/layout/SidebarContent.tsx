import { Box, CloseButton, Flex, Text } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';
import type { IconType } from 'react-icons';
import { FaDog, FaRegKissBeam, FaRegSurprise } from 'react-icons/fa';
import { GiSittingDog, GiSniffingDog } from 'react-icons/gi';

import { NavItem } from '../../molecules/NavItem';

type SidebarContentProps = {
  name: string;
  icon: IconType;
  href: string;
};
const RecommendItems: Array<SidebarContentProps> = [
  { name: 'おすすめしたい！', icon: FaRegKissBeam, href: '/tag/recommend' },
  { name: 'しくじった！？', icon: FaRegSurprise, href: '/tag/mistake' },
];
const WeightItems: Array<SidebarContentProps> = [
  { name: '小型犬（10kg未満）', icon: FaDog, href: '/tag/small' },
  { name: '中型犬（25kg未満）', icon: GiSittingDog, href: '/tag/medium' },
  { name: '大型犬（25kg以上）', icon: GiSniffingDog, href: '/tag/large' },
];

type SidebarProps = {
  onClose: () => void;
  display?: { base: string; md: string };
};

export const SidebarContent: VFC<SidebarProps> = memo((props) => {
  const { onClose, ...rest } = props;
  return (
    <Box borderRight="1px" borderRightColor="gray.200" w={{ base: 'full', md: 60 }} h="full" {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          おすすめ
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {RecommendItems.map((recommend) => (
        <NavItem key={recommend.name} href={recommend.href} icon={recommend.icon}>
          {recommend.name}
        </NavItem>
      ))}
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          大きさ
        </Text>
      </Flex>
      {WeightItems.map((weight) => (
        <NavItem key={weight.name} href={weight.href} icon={weight.icon}>
          {weight.name}
        </NavItem>
      ))}
    </Box>
  );
});
