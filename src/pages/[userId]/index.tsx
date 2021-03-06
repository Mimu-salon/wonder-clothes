import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Fragment } from 'react';

import { addApolloState, initializeApollo } from '../../apollo/client';
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserAllPostQuery,
  GetOneUserAllPostQueryVariables,
  Users,
} from '../../apollo/graphql';
import { GET_ALL_USERS, GET_ONE_USER_ALL_POST } from '../../apollo/queries';
import { PostCard } from '../../components/atomic/molecules/PostCard';
import { PostTabs } from '../../components/atomic/organisms/userPage/PostTabs';
import { Profile } from '../../components/atomic/organisms/userPage/Profile';
import { Layout } from '../../components/atomic/template/Layout';

type Props = {
  user: GetOneUserAllPostQuery['users'];
};

const UserPage: NextPage<Props> = (props) => {
  const { user } = props;
  const userPageUser = user[0];

  return (
    <Layout title={`${userPageUser.name}のマイページ | わんだーくろーす`}>
      <Profile user={userPageUser as Users} />
      <PostTabs defaultTab={0} userDisplayId={userPageUser.display_id} />

      <Box textAlign="center" maxW="1200px" mx="auto" pt={10} pb={20}>
        {userPageUser.posts.length === 0 ? (
          <>
            <Text my="20px" color="gray.400" fontWeight="bold">
              まだ投稿はありません。
            </Text>
            <Box filter="grayscale(55%)">
              <Image src={'/sampledog.png'} alt={'投稿なし'} width={350} height={350} />
            </Box>
          </>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 1, lg: 1, xl: 2 }} spacing={2}>
            {userPageUser.posts.map((post) => {
              return (
                <Fragment key={post.id}>
                  <PostCard
                    imageSrc={post.image}
                    postId={post.id}
                    text={post.content}
                    userIcon={userPageUser.image ?? '/nouser.svg'}
                    userName={userPageUser.name as string}
                    userId={userPageUser.display_id}
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
  const { data } = await client.query<GetOneUserAllPostQuery, GetOneUserAllPostQueryVariables>({
    query: GET_ONE_USER_ALL_POST,
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

export default UserPage;
