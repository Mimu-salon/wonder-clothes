import { Box, Stack, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import type { VFC } from 'react';
import { memo } from 'react';

type Props = {
  title: string;
  src: StaticImageData;
  alt: string;
  text: string;
};

export const FeatureCard: VFC<Props> = memo((props) => {
  const { title, src, alt, text } = props;
  return (
    <Stack spacing={4}>
      <Text w={250} fontWeight={600} fontSize="2xl" textAlign="center">
        {title}
      </Text>
      <Box maxW={250}>
        <Image src={src} alt={alt} width={250} height={250} />
      </Box>
      <Text w={250} color={'gray.600'}>
        {text}
      </Text>
    </Stack>
  );
});
