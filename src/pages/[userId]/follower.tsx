import { Box, Center, Flex, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { addApolloState, initializeApollo } from '../../apollo/client';
import type {
  GetAllUsersQuery,
  GetAllUsersQueryVariables,
  GetOneUserFollowerQuery,
  GetOneUserFollowerQueryVariables,
  Users,
} from '../../apollo/graphql';
import { GET_ALL_USERS, GET_ONE_USER_FOLLOWER } from '../../apollo/queries';
import { UserIcon } from '../../components/atomic/atoms/UserIcon';
import { PostTabs } from '../../components/atomic/organisms/userPage/PostTabs';
import { Profile } from '../../components/atomic/organisms/userPage/Profile';
import { Layout } from '../../components/atomic/template/Layout';

type Props = {
  user: GetOneUserFollowerQuery['users'];
};

const UserFollowesPage: NextPage<Props> = (props) => {
  const { user } = props;
  const userPageUser = user[0];
  const router = useRouter();

  return (
    <Layout title={`${userPageUser.name}のフォロワー一覧 | わんだーくろーす`}>
      <Profile user={userPageUser as Users} />
      <PostTabs defaultTab={2} userDisplayId={userPageUser.display_id} />
      <Center my="30px" flexDir="column">
        {userPageUser.followed.length === 0 ? (
          <>
            <Text my="20px" color="gray.400" fontWeight="bold">
              まだフォロワーはいません。
            </Text>
            <Box filter="grayscale(55%)">
              <Image src={'/sampledog.png'} alt={'投稿なし'} width={350} height={350} />
            </Box>
          </>
        ) : (
          <Flex>
            <SimpleGrid columns={[1, 1, 1, 2, 2]} spacingX={7} spacingY={7}>
              {userPageUser.followed.map(({ user }) => {
                return (
                  <>
                    <HStack
                      background="gray.100"
                      pr="30px"
                      borderRadius="full"
                      cursor="pointer"
                      _hover={{ opacity: 0.8 }}
                      onClick={() => {
                        router.push({
                          pathname: '/[userId]',
                          query: {
                            userId: user?.display_id,
                          },
                        });
                      }}>
                      <UserIcon src={user?.image} width={70} height={70} />
                      <Box>
                        <Text fontSize={['12px', '15px']} color="black">
                          {user?.name}
                        </Text>
                        <Text fontSize="12px" color="gray.500">
                          @{user?.display_id}
                        </Text>
                      </Box>
                    </HStack>
                  </>
                );
              })}
            </SimpleGrid>
          </Flex>
        )}
      </Center>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props, { userId: string }> = async ({ params }) => {
  const client = initializeApollo();
  const userId = params?.userId ?? '';
  const { data } = await client.query<GetOneUserFollowerQuery, GetOneUserFollowerQueryVariables>({
    query: GET_ONE_USER_FOLLOWER,
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

export default UserFollowesPage;
