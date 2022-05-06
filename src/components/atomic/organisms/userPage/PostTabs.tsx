import { Center, Spinner, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { memo } from 'react';

import { useGetUserInfomationQuery } from '../../../../apollo/graphql';

type UserInfo = {
  post: number;
  likePost: number;
  following: number;
  follower: number;
};

type Props = {
  defaultTab: 0 | 1 | 2 | 3;
  userDisplayId: string;
};

const initialUserInfo = {
  post: 0,
  likePost: 0,
  following: 0,
  follower: 0,
};

export const PostTabs: VFC<Props> = memo((props) => {
  const { defaultTab, userDisplayId } = props;
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);
  const router = useRouter();

  const query = { userId: userDisplayId };
  const transitions = {
    toPost: () => {
      router.push({ pathname: '/[userId]', query });
    },
    toLikePost: () => {
      router.push({ pathname: '/[userId]/likes', query });
    },
    toFollowing: () => {
      router.push({ pathname: '/[userId]/following', query });
    },
    toFollower: () => {
      router.push({ pathname: '/[userId]/follower', query });
    },
  };
  //投稿数等の集計値をタブに表示する
  const { data, loading } = useGetUserInfomationQuery({
    variables: {
      display_id: userDisplayId,
    },
  });

  useEffect(() => {
    if (!loading) {
      const user = data?.users[0];
      if (user) {
        setUserInfo({
          post: user.posts_aggregate.aggregate?.count ?? 0,
          likePost: user.post_likes_aggregate.aggregate?.count ?? 0,
          following: user.following_aggregate.aggregate?.count ?? 0,
          follower: user.followed_aggregate.aggregate?.count ?? 0,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Center>
      {loading ? (
        <Spinner />
      ) : (
        <Tabs
          variant="soft-rounded"
          colorScheme="green"
          align="center"
          size="sm"
          m={0}
          w={{ base: '100%', md: '600px', lg: '720px' }}
          defaultIndex={defaultTab}
          isFitted
          isLazy>
          <TabList>
            <Tab fontSize={{ base: '13px', md: '15px' }} onClick={transitions.toPost}>
              投稿 <br />
              {userInfo.post}
            </Tab>
            <Tab fontSize={{ base: '13px', md: '15px' }} onClick={transitions.toLikePost}>
              いいね <br /> {userInfo.likePost}
            </Tab>
            <Tab fontSize={{ base: '13px', md: '15px' }} onClick={transitions.toFollowing}>
              フォロー <br /> {userInfo.following}
            </Tab>
            <Tab fontSize={{ base: '13px', md: '15px' }} onClick={transitions.toFollower}>
              フォロワー <br /> {userInfo.follower}
            </Tab>
          </TabList>
        </Tabs>
      )}
    </Center>
  );
});
