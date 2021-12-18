import { Box, Flex, Heading } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';

import sampledog from '../../../../../public/sampledog.png';
import { HowToUseCard } from '../../molecules/HowToUseCard';

export const HowToUse: VFC = memo(() => {
  return (
    <Box backgroundColor={'orange.100'}>
      <Box py={20}>
        <Heading fontWeight={700} fontSize="3xl" textAlign="center">
          つかいかた
        </Heading>
      </Box>
      <Flex px={10} pb={20} w="full" justifyContent="center" alignItems="center">
        <Box mx="auto" maxW={1000}>
          <HowToUseCard
            heading="使い方だぞ"
            text="1111111111111111111111111111111111111111111111111111111111"
            src={sampledog}
            alt="サンプル画像"
          />
          <HowToUseCard
            order={{ base: 0, md: 2 }}
            heading="使い方だyo"
            text="22222222222222222222222222222222222222222222222222222222222"
            src={sampledog}
            alt="サンプル画像"
          />
          <HowToUseCard
            heading="使い方です"
            text="3333333333333333333333333333333333333333333333333333333333"
            src={sampledog}
            alt="サンプル画像"
          />
        </Box>
      </Flex>
    </Box>
  );
});
