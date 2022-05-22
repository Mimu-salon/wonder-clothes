import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import type { VFC } from 'react';
import { memo } from 'react';

import concept1 from '../../../../../public/concept1.jpg';
import concept2 from '../../../../../public/concept2.jpg';
import concept3 from '../../../../../public/concept3.jpg';
import { FeatureCard } from '../../molecules/FeatureCard';

export const Concept: VFC = memo(() => {
  return (
    <>
      <Box py={20}>
        <Text fontWeight={700} fontSize="3xl" textAlign="center">
          できること
        </Text>
      </Box>
      <Flex justifyContent="center">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 18, lg: 24 }} pb={20}>
          <FeatureCard
            title="おすすめしたい！"
            src={concept1}
            alt="服が似合っている犬の画像"
            text="愛犬のお気に入りのファッションを紹介しよう。やっぱりウチのコが一番かわいいのだ！"
          />
          <FeatureCard
            title="しくじった！？"
            src={concept2}
            alt="服が似合っていない犬の画像"
            text="どうしようまったく似合っていない！？思わず笑っちゃうような投稿も大歓迎！"
          />
          <FeatureCard
            title="参考にしたい！"
            src={concept3}
            alt="ディスプレイを見る犬の画像"
            text="みんなの投稿を見てみよう。気になるファッションを見つけたら要チェック！"
          />
        </SimpleGrid>
      </Flex>
    </>
  );
});
