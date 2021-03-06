import { loginUserVar } from '../../apollo/cache';
import { storage } from '../../firebase/firebaseConfig';
import { getRandom16DigitsName } from './usePostContents';

export const uploadProfileImage = async (blob: Blob) => {
  const loginUser = loginUserVar();
  const fileName = getRandom16DigitsName();
  const uploadRef = storage.ref(`images/profile/${loginUser?.id}`).child(fileName);

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
  return image;
};