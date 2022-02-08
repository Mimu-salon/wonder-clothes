import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';

type Props = {
  defaultTab: 0 | 1 | 2;
  userDisplayId: string;
};

export const PostTabs: VFC<Props> = memo((props) => {
  const { defaultTab, userDisplayId } = props;

  const router = useRouter();
  const query = { userId: userDisplayId };
  const transitions = {
    toPost: () => {
      router.push({ pathname: '/[userId]', query });
    },
    toFollowPost: () => {
      router.push({ pathname: '/[userId]/follows/posts', query });
    },
    toLikePost: () => {
      router.push({ pathname: '/[userId]/likes/posts', query });
    },
  };
  return (
    <Tabs variant="soft-rounded" colorScheme="green" align="center" size="md" defaultIndex={defaultTab} isLazy>
      <TabList>
        <Tab onClick={transitions.toPost}>投稿</Tab>
        <Tab onClick={transitions.toFollowPost}>フォロー中の新着</Tab>
        <Tab onClick={transitions.toLikePost}>お気に入り</Tab>
      </TabList>
    </Tabs>
  );
});
