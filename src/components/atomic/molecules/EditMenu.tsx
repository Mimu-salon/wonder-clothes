import { HamburgerIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';

import { initializeApollo } from '../../../apollo/client';
import type { DelatePostOneMutation, DelatePostOneMutationVariables, Posts } from '../../../apollo/graphql';
import { DELETE_POST_ONE } from '../../../apollo/queries';
import { useMessage } from '../../hooks/useMessage';
import { deletePostImage } from '../../hooks/usePostContents';
import { NewPostModal } from './NewPostModal';

type Props = {
  post?: Posts;
};

export const EditMenu: VFC<Props> = memo((props) => {
  const { post } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { showMessage } = useMessage();
  const client = initializeApollo();
  const router = useRouter();

  const handleEdit = async () => {
    if (post) {
      onOpen();
    }
  };

  const handleDelete = async () => {
    if (post) {
      if (confirm('本当に削除しますか？')) {
        if (confirm('本当にこの投稿を削除しますか？')) {
          const result = await client.mutate<DelatePostOneMutation, DelatePostOneMutationVariables>({
            mutation: DELETE_POST_ONE,
            variables: {
              postId: post.id,
            },
          });
          const deletedPost = result.data?.delete_posts_by_pk;
          // 削除した投稿に画像が登録されていればfirebase上の画像も削除
          if (deletedPost?.image && deletedPost.imageUrl) {
            deletePostImage(deletedPost.user_id, deletedPost.imageUrl);
          }
          showMessage({
            title: '投稿を削除しました',
            status: 'info',
          });
          router.push('/');
        }
      }
    }
  };

  return (
    <>
      <Menu isLazy id="edit-menu">
        <MenuButton px="6px" _hover={{ bg: 'gray.100' }}>
          <HamburgerIcon color="gray.600" w="26px" h="26px" />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleEdit}>投稿を編集</MenuItem>
          <MenuItem onClick={handleDelete}>投稿を削除</MenuItem>
        </MenuList>
        {/* 投稿時のModalを表示 */}
        {post && <NewPostModal isOpen={isOpen} onClose={onClose} postData={post} />}
      </Menu>
    </>
  );
});
