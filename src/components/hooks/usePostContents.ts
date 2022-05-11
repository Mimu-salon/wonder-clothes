import imageCompression from 'browser-image-compression';

import { loginUserVar } from '../../apollo/cache';
import { initializeApollo } from '../../apollo/client';
import type {
  EditPostOneMutation,
  EditPostOneMutationVariables,
  EditPostOneWithoutImageMutation,
  EditPostOneWithoutImageMutationVariables,
  InsertPostOneMutation,
  InsertPostOneMutationVariables,
} from '../../apollo/graphql';
import { EDIT_POST_ONE, EDIT_POST_ONE_WITHOUT_IMAGE, INSERT_POST_ONE } from '../../apollo/queries';
import { storage } from '../../firebase/firebaseConfig';

type FromSubmitData = {
  id?: string; // idがある場合は編集、ない場合は新規投稿
  image: string | null;
  imageUrl: string | null;
  content: string;
  petName: string;
  petGender: string;
  size: string;
  recommend: string;
};

// 画像の圧縮
export const compressFile = async (file: File): Promise<File> => {
  return await imageCompression(file, {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 800,
  });
};

// firebase storageに画像を上げる際のfileNameランダム生成
export const getRandom16DigitsName = () => {
  const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const N = 16;
  const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
    .map((n) => {
      return S[n % S.length];
    })
    .join('');

  return fileName;
};

// 画像をfirebaseにアップロードする
export const uploadPostImage = async (file: File) => {
  const loginUser = loginUserVar();
  const compressedFile = await compressFile(file);
  const blob = new Blob([compressedFile], { type: file.type });

  const fileName = getRandom16DigitsName();
  const uploadRef = storage.ref(`images/post/${loginUser?.id}`).child(fileName);

  const image: string = await new Promise((resolve) => {
    uploadRef
      .put(blob)
      .then((snap) => {
        snap.ref.getDownloadURL().then((downloadURL: string) => {
          resolve(downloadURL as string);
        });
      })
      .catch((error) => {
        alert('画像のアップロードに失敗しました');
        // eslint-disable-next-line no-console
        console.log(error);
      });
  });
  return {
    image,
    imageId: fileName,
  };
};

// 投稿が削除された際は、その投稿に登録されている画像も削除する
export const deletePostImage = (userId: string, fileName: string) => {
  const imageRef = storage.ref(`images/post/${userId}`).child(fileName);
  imageRef
    .delete()
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .then(() => {})
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

// 入力データを元にHasuraのpostsテーブルにINSERTする
export const insertPostToHasura = async (props: FromSubmitData) => {
  const { id, image, imageUrl, content, petName, petGender, size, recommend } = props;
  const client = initializeApollo();
  const loginUser = loginUserVar();

  if (!loginUser) {
    return;
  }

  if (id) {
    // 投稿編集時
    if (image && imageUrl) {
      // 画像変更あり
      return await client.mutate<EditPostOneMutation, EditPostOneMutationVariables>({
        mutation: EDIT_POST_ONE,
        variables: {
          id: id,
          user_id: loginUser.id,
          image: image,
          imageUrl: imageUrl,
          content: content,
          petName: petName,
          petGender: petGender,
          tag_size: size,
          tag_recommend: recommend,
        },
      });
    } else {
      // 画像変更なし
      return await client.mutate<EditPostOneWithoutImageMutation, EditPostOneWithoutImageMutationVariables>({
        mutation: EDIT_POST_ONE_WITHOUT_IMAGE,
        variables: {
          id: id,
          user_id: loginUser.id,
          content: content,
          petName: petName,
          petGender: petGender,
          tag_size: size,
          tag_recommend: recommend,
        },
      });
    }
  } else {
    // 新規投稿時
    return await client.mutate<InsertPostOneMutation, InsertPostOneMutationVariables>({
      mutation: INSERT_POST_ONE,
      variables: {
        user_id: loginUser.id,
        image: image,
        imageUrl: imageUrl,
        content: content,
        petName: petName,
        petGender: petGender,
        tag_size: size,
        tag_recommend: recommend,
      },
    });
  }
};
