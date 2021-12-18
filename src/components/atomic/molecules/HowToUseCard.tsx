import { Box } from '@chakra-ui/layout';
import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import type { VFC } from 'react';
import { memo } from 'react';

type Props = {
  order?: { base: number; md: number };
  heading: string;
  text: string;
  src: StaticImageData;
  alt: string;
};

export const HowToUseCard: VFC<Props> = memo((props) => {
  const { order, heading, text, src, alt } = props;
  return (
    <SimpleGrid alignItems="center" columns={{ base: 1, md: 2 }} mb={24}>
      <Box order={order} px={4}>
        <Heading mb={4} fontWeight={700} fontSize="2xl" textAlign={{ base: 'center', md: 'left' }}>
          {heading}
        </Heading>
        <Text mb={5} color={'gray.600'}>
          {text}
        </Text>
      </Box>
      <Box w="full" h="full">
        <Image src={src} alt={alt} />
      </Box>
    </SimpleGrid>
  );
});
