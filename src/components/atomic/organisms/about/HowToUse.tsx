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
            heading="投稿を見てみよう"
            text="左上のロゴを押すとホーム画面を表示できます。みんなの投稿を見たり、ワンちゃんの大きさに応じて検索ができます。参考にしたいワンちゃんやファッションを探してみましょう！"
            src={sampledog}
            alt="つかいかた｜投稿を見てみよう"
          />
          <HowToUseCard
            order={{ base: 0, md: 2 }}
            heading="気軽に投稿してみよう"
            text="ログイン後に右上の投稿ボタンから投稿できます。『おすすめしたい！』と『しくじった！？』を選べるので、かわいい洋服はもちろん、失敗したと思うような洋服でも大丈夫。ハードルをぐっと下げていきましょう！"
            src={sampledog}
            alt="つかいかた｜気軽に投稿してみよう"
          />
          <HowToUseCard
            heading="いいねやコメントをしてみよう"
            text="投稿にはいいねやコメントをつけることができ、気になったユーザーをフォローすることができます。右上のユーザーアイコンのマイページより、自分の投稿、いいねした投稿、フォローとフォロワーを確認することできます。"
            src={sampledog}
            alt="つかいかた｜いいねやコメントをしてみよう"
          />
        </Box>
      </Flex>
    </Box>
  );
});
