import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Fragment } from 'react';

import { addApolloState, initializeApollo } from '../../apollo/client';
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserLikePostQuery,
  GetOneUserLikePostQueryVariables,
  Users,
} from '../../apollo/graphql';
import { GET_ALL_USERS, GET_ONE_USER_LIKE_POST } from '../../apollo/queries';
import { PostCard } from '../../components/atomic/molecules/PostCard';
import { PostTabs } from '../../components/atomic/organisms/userPage/PostTabs';
import { Profile } from '../../components/atomic/organisms/userPage/Profile';
import { Layout } from '../../components/atomic/template/Layout';

type Props = {
  user: GetOneUserLikePostQuery['users'];
};

const LikesPostPage: NextPage<Props> = (props) => {
  const { user } = props;
  const userPageUser = user[0];

  return (
    <Layout title={`${userPageUser.name}のいいねしたポスト一覧 | わんだーくろーす`}>
      <Profile user={userPageUser as Users} />
      <PostTabs defaultTab={1} userDisplayId={userPageUser.display_id} />

      <Box textAlign="center" maxW="1200px" mx="auto" pt={10} pb={20}>
        {userPageUser.post_likes.length === 0 ? (
          <>
            <Text my="20px" color="gray.400" fontWeight="bold">
              まだいいねした投稿はありません。
            </Text>
            <Box filter="grayscale(55%)">
              <Image src={'/sampledog.png'} alt={'投稿なし'} width={350} height={350} />
            </Box>
          </>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 2 }} spacing={2}>
            {userPageUser.post_likes.map(({ post }) => {
              return (
                <Fragment key={post.id}>
                  <PostCard
                    imageSrc={post.image}
                    postId={post.id}
                    text={post.content}
                    userIcon={post.user.image ?? '/nouser.svg'}
                    userName={post.user.name as string}
                    userId={post.user.display_id as string}
                    commentCount={post.post_comments_aggregate.aggregate?.count as number}
                    likeCount={post.post_likes_aggregate.aggregate?.count as number}
                  />
                </Fragment>
              );
            })}
          </SimpleGrid>
        )}
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props, { userId: string }> = async ({ params }) => {
  const client = initializeApollo();
  const userId = params?.userId ?? '';
  const { data } = await client.query<GetOneUserLikePostQuery, GetOneUserLikePostQueryVariables>({
    query: GET_ONE_USER_LIKE_POST,
    variables: {
      display_id: userId,
    },
  });
  if (data.users.length === 0) {
    return {
      notFound: true,
    };
  }
  return addApolloState(client, { props: { user: data.users }, revalidate: 300 });
};

export const getStaticPaths: GetStaticPaths<{ userId: string }> = async () => {
  const client = initializeApollo();
  const { data } = await client.query<GetAllUsersQuery, GetAllUsersQueryVariables>({
    query: GET_ALL_USERS,
  });

  const paths = data.users.map((user) => {
    return { params: { userId: user.display_id } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export default LikesPostPage;
