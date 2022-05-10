import { useReactiveVar } from '@apollo/client';
import { Box, Center, Heading, HStack, Spinner, Stack, Text, VStack } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { loginUserVar } from '../../../../apollo/cache';
import { addApolloState, initializeApollo } from '../../../../apollo/client';
import type {
  AddPostLikeMutation,
  AddPostLikeMutationVariables,
  GetAllUsersWithPostsQuery,
  GetAllUsersWithPostsQueryVariables,
  GetOneUserWithPostQuery,
  GetOneUserWithPostQueryVariables,
  GetPostLikeCountQuery,
  GetPostLikeCountQueryVariables,
  PostComments,
  Posts,
  RemovePostLikeMutation,
  RemovePostLikeMutationVariables,
  Users,
} from '../../../../apollo/graphql';
import { useSubscriptionPostCommentSubscription } from '../../../../apollo/graphql';
import {
  ADD_POST_LIKE,
  GET_ALL_USERS_WITH_POSTS,
  GET_ONE_USER_WITH_POST,
  GET_POST_LIKE_COUNT,
  REMOVE_POST_LIKE,
} from '../../../../apollo/queries';
import { CommentIconWithCount } from '../../../../components/atomic/atoms/CommentIconWithCount';
import { FollowButton } from '../../../../components/atomic/atoms/FollowButton';
import { LikeIconWithCount } from '../../../../components/atomic/atoms/LikeIconWithCount';
import { PrimaryTag } from '../../../../components/atomic/atoms/PrimaryTag';
import { UserIcon } from '../../../../components/atomic/atoms/UserIcon';
import { EditMenu } from '../../../../components/atomic/molecules/EditMenu';
import { CommentForm } from '../../../../components/atomic/organisms/posts/CommentForm';
import { CommentList } from '../../../../components/atomic/organisms/posts/CommentList';
// import { PostDetailComment } from '../../../../components/atomic/organisms/posts/PostDetailComment';
// import { PostDetailContent } from '../../../../components/atomic/organisms/posts/PostDetailContent';
// import { PostDetailImage } from '../../../../components/atomic/organisms/posts/PostDetailImage';
// import { PostDetailPetInfo } from '../../../../components/atomic/organisms/posts/PostDetailPetInfo';
// import { PostDetailUserCard } from '../../../../components/atomic/organisms/posts/PostDetailUserCard';
import { Layout } from '../../../../components/atomic/template/Layout';
import { useConvertDateFromHasura } from '../../../../components/hooks/useConvertDateFromHasura';
import { useMessage } from '../../../../components/hooks/useMessage';

type Props = {
  user: Users;
};

const initialLikeData = {
  post_likes: [],
};

const commentData = (data: PostComments[] | undefined) => {
  if (data) {
    return data.map((comment) => {
      return {
        userIcon: comment.user.image,
        userName: comment.user.name,
        userId: comment.user.display_id,
        comment: comment.comment,
      };
    });
  }
  return [];
};

const PostPage: NextPage<Props> = (props) => {
  const { user } = props;
  const [postUser, setPostUser] = useState<Users>(user);
  const [post, setPost] = useState<Posts>(user.posts[0]);
  const [likeData, setLikeData] = useState<GetPostLikeCountQuery>(initialLikeData);

  const createdAt = useConvertDateFromHasura(post.created_at);
  const loginUser = useReactiveVar(loginUserVar);
  const client = initializeApollo();
  const router = useRouter();
  const { showMessage } = useMessage();
  const isMine = loginUser && loginUser.id === postUser.id;

  const { data, loading } = useSubscriptionPostCommentSubscription({
    variables: {
      postId: post.id,
    },
  });

  const toUserDetailPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    router.push({
      pathname: '/[userId]',
      query: {
        userId: postUser.display_id,
      },
    });
  };

  // CommentIconをクリックしたら、入力のTextAreaにfocusを当てる
  const commentInput = useRef<HTMLTextAreaElement>(null);

  const fetchLike = async () => {
    const data = await client.query<GetPostLikeCountQuery, GetPostLikeCountQueryVariables>({
      query: GET_POST_LIKE_COUNT,
      variables: {
        postId: post.id,
      },
      fetchPolicy: 'network-only',
    });
    setLikeData(data.data);
  };

  const isCurrentUserLiked = () => {
    return likeData.post_likes.some((item) => {
      return item.user_id === loginUser?.id;
    });
  };

  const handleToggleLike = async () => {
    if (isCurrentUserLiked()) {
      await client.mutate<RemovePostLikeMutation, RemovePostLikeMutationVariables>({
        mutation: REMOVE_POST_LIKE,
        variables: {
          userId: loginUser?.id as string,
          postId: post.id,
        },
      });
    } else {
      await client.mutate<AddPostLikeMutation, AddPostLikeMutationVariables>({
        mutation: ADD_POST_LIKE,
        variables: {
          userId: loginUser?.id as string,
          postId: post.id,
        },
      });
    }
    await fetchLike();
  };

  useEffect(() => {
    (async () => {
      // 投稿編集後は最新情報が反映されない為、投稿者本人の場合のみクライアントで投稿を再fetch
      if (isMine) {
        const { data } = await client.query<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>({
          query: GET_ONE_USER_WITH_POST,
          variables: {
            userId: postUser.display_id,
            postId: post.id,
          },
          fetchPolicy: 'network-only',
        });

        setPostUser(data.users[0] as Users);
        setPost(data.users[0].posts[0] as Posts);
      }
      // いいね情報の取得は毎回行う
      await fetchLike();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);

  return (
    <Layout title={`${user.name}のポスト「${user.posts[0].content}」`}>
      {loading ? (
        <Center h="100vh" w="100vw">
          <Spinner />
        </Center>
      ) : (
        <VStack spacing={4}>
          {/* UserCard */}
          <VStack mt={4}>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              w={{ base: '95vw', md: '540px' }}
              height={{ sm: '100px', md: '6rem' }}
              alignItems="flex-start"
              direction="row"
              bg="white"
              boxShadow={'1xl'}
              padding={3}>
              <Box mr={1} cursor="pointer" onClick={toUserDetailPage}>
                <UserIcon src={postUser.image} width={65} height={65} />
              </Box>
              <Stack direction="column" w="100%">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Heading fontSize={{ base: '1xl', md: '2xl' }}>{postUser.name}</Heading>
                  {loginUser && <FollowButton fromUserId={loginUser.id} toUserId={user.id} />}
                  {isMine && <EditMenu post={post} />}
                </Stack>
                <Text fontWeight={600} fontSize="xs" color="gray.500" size="sm" mb={4}>
                  @{postUser.display_id}
                </Text>
              </Stack>
            </Stack>
          </VStack>
          {/* <PostDetailUserCard /> */}

          {/* PostImage */}
          <Box position="relative">
            <Center
              w={{ base: '330px', md: '430px' }}
              h={{ base: '520px', md: '630px' }}
              position="relative"
              mx="10px"
              borderRadius="20px">
              {post.image ? (
                <Image src={post.image} alt="愛犬ファッション投稿画像" layout="fill" objectFit="contain" />
              ) : (
                <Center bg="gray.50" w="100%" h="100%" borderRadius="inherit">
                  <Text fontWeight="bold" fontSize="24px" color="gray.600" transform="rotate(-28deg)">
                    No Image
                  </Text>
                </Center>
              )}
            </Center>
          </Box>
          {/* <PostDetailImage /> */}

          {/* PetInfo */}
          <VStack>
            <Stack
              borderWidth="1px"
              borderRadius="lg"
              w={{ base: '95vw', md: '540px' }}
              height={{ sm: '120px', md: '7rem' }}
              alignItems="center"
              justifyContent="center"
              bg="white"
              boxShadow={'1xl'}
              padding={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Text fontSize="22px">
                  {post.petName}
                  <Box as="span" fontSize="14px" pl={1}>
                    {post.petGender === '男の子' ? 'くん' : 'ちゃん'}
                  </Box>
                </Text>
                <Text fontSize="14px" color="gray.500">
                  {createdAt}
                </Text>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={3}>
                <HStack>
                  <Link
                    href={{
                      pathname: '/weight/[weightId]',
                    }}>
                    <a href="replace">
                      <PrimaryTag>#{post.tag_size}</PrimaryTag>
                    </a>
                  </Link>
                  <Link
                    href={{
                      pathname: '/recommend/[recommendId]',
                    }}>
                    <a href="replace">
                      <PrimaryTag>#{post.tag_recommend}</PrimaryTag>
                    </a>
                  </Link>
                </HStack>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={3}>
                <HStack>
                  <Box
                    onClick={() => {
                      commentInput.current?.focus();
                    }}>
                    <CommentIconWithCount fontSize="18px" count={data?.post_comments.length as number} />
                  </Box>
                  <Box
                    onClick={async () => {
                      if (!loginUser) {
                        showMessage({
                          title: 'いいね機能をご利用いただくにはログインが必要です',
                          status: 'info',
                        });
                        return;
                      }
                      await handleToggleLike();
                    }}>
                    <LikeIconWithCount
                      fontSize="18px"
                      iconSize="21px"
                      count={likeData.post_likes.length}
                      initial={isCurrentUserLiked()}
                    />
                  </Box>
                </HStack>
              </Stack>
            </Stack>
          </VStack>

          {/* <PostDetailPetInfo
          onClick={() => {
            commentInput.current?.focus();
          }}
        /> */}
          {/* Content */}
          <Box
            w={{ base: '95vw', md: '540px' }}
            mb="50px"
            p="20px"
            borderRadius="20px"
            boxShadow="0px 0px 5px rgba(40,40,40,0.15)">
            <Text fontSize="18px" color="gray.700" whiteSpace="pre-wrap">
              {post.content}
            </Text>
          </Box>
          {/* <PostDetailContent /> */}

          {/* Comment */}
          <Box w={{ base: '95vw', md: '540px' }} px="20px">
            {/* setState関数は渡さず、コンポーネント内でのmutationをsubscriptionsで検知する */}
            <CommentForm postId={post.id} commentInput={commentInput} />

            <Heading fontSize="20px" color="gray.700" my={3}>
              コメント({data?.post_comments.length})
            </Heading>
            <CommentList comments={commentData(data?.post_comments as PostComments[])} />
          </Box>
          {/* <PostDetailComment commentInput={commentInput} /> */}
        </VStack>
      )}
    </Layout>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps<Props, { userId: string; postId: string }> = async ({ params }) => {
  const client = initializeApollo();

  const { data } = await client.query<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>({
    query: GET_ONE_USER_WITH_POST,
    variables: {
      userId: params?.userId as string,
      postId: params?.postId as string,
    },
  });
  if (data.users.length === 0 || data.users[0].posts.length === 0) {
    return {
      notFound: true,
    };
  }
  return addApolloState(client, { props: { user: data.users[0] }, revalidate: 300 });
};

export const getStaticPaths: GetStaticPaths<{ userId: string; postId: string }> = async () => {
  const client = initializeApollo();
  const { data } = await client.query<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>({
    query: GET_ALL_USERS_WITH_POSTS,
  });
  const paths = data.users
    .map((user) => {
      return user.posts.map((post) => {
        return { params: { userId: user.display_id, postId: post.id.toString() } };
      });
    })
    .flat();

  return {
    paths,
    fallback: 'blocking',
  };
};
