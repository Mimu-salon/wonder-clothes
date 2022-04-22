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
