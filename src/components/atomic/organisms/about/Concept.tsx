import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

import sampledog from '../../../../../public/sampledog.png';
import { FeatureCard } from '../../molecules/FeatureCard';

export const Concept: VFC = memo(() => {
  return (
    <>
      <Box my={20}>
        <Text fontWeight={700} fontSize="3xl" textAlign="center">
          できること
        </Text>
      </Box>
      <Flex justifyContent="center">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 24 }}>
          <FeatureCard
            title="おすすめしたい！"
            src={sampledog}
            alt="服が似合っている犬の画像"
            text="愛犬のお気に入りのファッションを紹介しよう。やっぱりウチのコが一番かわいいのだ！"
          />
          <FeatureCard
            title="しくじった！？"
            src={sampledog}
            alt="服が似合っていない犬の画像"
            text="どうしようまったく似合っていない！？思わず笑っちゃうような投稿も大歓迎！"
          />
          <FeatureCard
            title="参考にしたい！"
            src={sampledog}
            alt="ディスプレイを見る犬の画像"
            text="みんなの投稿を見てみよう。気になるファッションを見つけたら要チェック！"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
});
