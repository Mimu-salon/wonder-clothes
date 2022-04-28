import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';

import sampledog from '../../../../public/sampledog.png';
import { CommentIconWithCount } from '../atoms/CommentIconWithCount';
import { LikeIconWithCount } from '../atoms/LikeIconWithCount';
import { UserIcon } from '../atoms/UserIcon';

type PostCardProps = {
  imageSrc?: string | null;
  postId: string;
  text: string;
  userIcon: string;
  userName: string;
  userId: string;
  commentCount: number;
  likeCount: number;
};

export const PostCard: VFC<PostCardProps> = memo((props) => {
  const { imageSrc, postId, text, userIcon, userName, userId, commentCount, likeCount } = props;
  const router = useRouter();

  const toPostDetailPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    router.push({
      pathname: '/[userId]/posts/[postId]',
      query: {
        userId: userId,
        postId: postId,
      },
    });
  };

  const toUserDetailPage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    router.push({
      pathname: '/[userId]',
      query: {
        userId: userId,
      },
    });
  };

  return (
    <Center py={1}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ base: '330px', md: '540px' }}
        height={{ md: '320px' }}
        direction={{ base: 'column', md: 'row' }}
        bg="white"
        boxShadow="2xl"
        transition="all 0.3s"
        _hover={{
          transform: 'translateY(-3px)',
          boxShadow: '0px 3px 12px -3px rgba(60, 60, 60, 0.15)',
        }}
        padding={4}>
        <Flex
          flex={1}
          cursor="pointer"
          onClick={(e) => {
            toPostDetailPage(e);
          }}>
          {imageSrc ? (
            <Image objectFit="contain" width={300} height={260} src={imageSrc} alt="投稿画像" priority />
          ) : (
            <Image
              objectFit="contain"
              width={300}
              height={260}
              src={sampledog}
              alt="投稿画像がない場合の画像"
              priority
            />
          )}
        </Flex>
        <Stack flex={1} flexDirection="column">
          <Stack direction="row" spacing={4} align="center" cursor="pointer" onClick={toUserDetailPage}>
            <UserIcon src={userIcon} width={50} height={50} />
            <Stack direction="column" spacing={0} fontSize="sm">
              <Text textAlign="left" fontWeight={600}>
                {userName}
              </Text>
              <Text textAlign="left" color="gray.500">
                @{userId}
              </Text>
            </Stack>
          </Stack>
          <Box
            w={{ base: '288px', md: '241px' }}
            h={{ base: '147px', md: '189px' }}
            cursor="pointer"
            onClick={toPostDetailPage}>
            <Text color="gray.700" textAlign="left" fontSize="sm">
              {text}
            </Text>
          </Box>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="right"
            onClick={(e) => {
              toPostDetailPage(e);
            }}>
            <CommentIconWithCount fontSize="20px" count={commentCount} />
            <LikeIconWithCount fontSize="20px" iconSize="24px" initial={false} noAnimation={true} count={likeCount} />
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
});
