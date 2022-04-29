import { useReactiveVar } from '@apollo/client';
import { Box, Button, Center, Heading, HStack, Stack, Text, Textarea, VStack } from '@chakra-ui/react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { loginUserVar } from '../../../../apollo/cache';
import { addApolloState, initializeApollo } from '../../../../apollo/client';
import type {
  GetAllUsersWithPostsQuery,
  GetAllUsersWithPostsQueryVariables,
  GetOneUserWithPostQuery,
  GetOneUserWithPostQueryVariables,
  Posts,
  Users,
} from '../../../../apollo/graphql';
import { GET_ALL_USERS_WITH_POSTS, GET_ONE_USER_WITH_POST } from '../../../../apollo/queries';
import { CommentIconWithCount } from '../../../../components/atomic/atoms/CommentIconWithCount';
import { LikeIconWithCount } from '../../../../components/atomic/atoms/LikeIconWithCount';
import { PrimaryTag } from '../../../../components/atomic/atoms/PrimaryTag';
import { UserIcon } from '../../../../components/atomic/atoms/UserIcon';
import { CommentList } from '../../../../components/atomic/molecules/CommentList';
import { EditMenu } from '../../../../components/atomic/molecules/EditMenu';
// import { PostDetailComment } from '../../../../components/atomic/organisms/posts/PostDetailComment';
// import { PostDetailContent } from '../../../../components/atomic/organisms/posts/PostDetailContent';
// import { PostDetailImage } from '../../../../components/atomic/organisms/posts/PostDetailImage';
// import { PostDetailPetInfo } from '../../../../components/atomic/organisms/posts/PostDetailPetInfo';
// import { PostDetailUserCard } from '../../../../components/atomic/organisms/posts/PostDetailUserCard';
import { Layout } from '../../../../components/atomic/template/Layout';
import { useConvertDateFromHasura } from '../../../../components/hooks/useConvertDateFromHasura';

type Props = {
  user: Users;
};

const PostPage: NextPage<Props> = (props) => {
  const { user } = props;
  const [postUser, setPostUser] = useState<Users>(user);
  const [post, setPost] = useState<Posts>(user.posts[0]);

  const createdAt = useConvertDateFromHasura(post.created_at);
  const loginUser = useReactiveVar(loginUserVar);
  const client = initializeApollo();
  const router = useRouter();
  const isMine = loginUser && loginUser.id === postUser.id;

  // CommentIconをクリックしたら、入力のTextAreaにfocusを当てる
  const commentInput = useRef<HTMLTextAreaElement>(null);

  const toUserDetailPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    router.push({
      pathname: '/[userId]',
      query: {
        userId: postUser.display_id,
      },
    });
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
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginUser]);

  return (
    <Layout title={`${user.name}のポスト「${user.posts[0].content}」`}>
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
                {loginUser && (
                  <Button
                    size="sm"
                    leftIcon={<AiOutlinePlus />}
                    colorScheme="blue"
                    variant="outline"
                    opacity={0.8}
                    boxShadow="md">
                    フォロー
                  </Button>
                )}
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
                    <PrimaryTag>#{post.post_tag_size?.size}</PrimaryTag>
                  </a>
                </Link>
                <Link
                  href={{
                    pathname: '/recommend/[recommendId]',
                  }}>
                  <a href="replace">
                    <PrimaryTag>#{post.post_tag_recommend?.recommend}</PrimaryTag>
                  </a>
                </Link>
              </HStack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <HStack>
                <CommentIconWithCount
                  fontSize="18px"
                  count={5}
                  onClick={() => {
                    commentInput.current?.focus();
                  }}
                />
                <LikeIconWithCount fontSize="18px" iconSize="21px" count={14} initial={false} />
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
          <Textarea ref={commentInput} placeholder="コメントを書く（100文字以内）" h="150px" borderColor="gray.400" />
          <Box textAlign="right" mt={2}>
            <Button colorScheme="teal">送信</Button>
          </Box>
          <Heading fontSize="20px" color="gray.700" my={3}>
            コメント(0)
          </Heading>
          <CommentList />
        </Box>
        {/* <PostDetailComment commentInput={commentInput} /> */}
      </VStack>
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
