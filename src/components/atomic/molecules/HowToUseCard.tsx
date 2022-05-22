import { Box } from '@chakra-ui/layout';
import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';
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
      <Box order={order} px={{ base: 4, md: 8 }}>
        <Heading mb={4} fontWeight={700} fontSize="2xl" textAlign={{ base: 'center', md: 'left' }}>
          {heading}
        </Heading>
        <Text mb={5} color={'gray.600'}>
          {text}
        </Text>
      </Box>
      <Box
        w="full"
        h="full"
        css={css`
          div {
            background-color: transparent;
            position: relative;
            z-index: 0;
          }
        `}>
        <div>
          <Box
            css={css`
              div {
                position: relative;
                margin: 6em auto 3em;
                padding: 1px 1px;
                width: 100%; /* ボックス幅 */
                background: #453016; /* ボックス背景色 */
                color: #fff; /* 文字色 */
                border: 8px solid #583713; /* ボックス枠線(太さ・線種・色) */
                border-radius: 5px;
                z-index: auto;
              }
              div::before,
              div::after {
                height: 70px;
                width: 70px;
                position: absolute;
                content: '';
                top: -60px;
                z-index: -10;
              }
              div::before {
                left: 1%;
                background: #b37d3b; /* 左耳背景色 */
                border: 8px solid #583713; /* 左耳枠線(太さ・線種・色) */
                border-radius: 10px 50px 100px 50px;
                transform: rotate(30deg);
              }
              div::after {
                right: 1%;
                background: #b37d3b; /* 右耳背景色 */
                border: 8px solid #583713; /* 右耳枠線(太さ・線種・色) */
                border-radius: 50px 10px 50px 100px;
                transform: rotate(-30deg);
              }
            `}>
            <div>
              <Image src={src} alt={alt} />
            </div>
          </Box>
        </div>
      </Box>
    </SimpleGrid>
  );
});
