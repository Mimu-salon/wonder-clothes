import { Center, Icon, Img, Input, Stack, Text, VisuallyHidden } from '@chakra-ui/react';
import type { Dispatch, SetStateAction, VFC } from 'react';
import { useState } from 'react';
import { memo } from 'react';

type Props = {
  image?: string;
  setImage: Dispatch<SetStateAction<File | string | null>>;
};

export const ImageArea: VFC<Props> = memo((props) => {
  const { image, setImage } = props;

  const [preview, setPreview] = useState(image ?? 'none');

  const onChangeFlie = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setPreview(window.URL.createObjectURL(files[0]));
      setImage(files[0]);
    }
  };

  return (
    <label htmlFor="imageFile">
      <VisuallyHidden>
        <Input id="imageFile" type="file" accept="image/*" onChange={onChangeFlie} />
      </VisuallyHidden>
      {preview === 'none' ? (
        <Center
          w={{ base: '330px', lg: '20vw' }}
          h={{ base: '470px', lg: '29vw' }}
          bg="gray.200"
          borderWidth={2}
          borderColor="gray.300"
          borderStyle="dashed"
          rounded="md"
          mt="20px"
          transition="all 0.9s"
          _hover={{ opacity: 0.8 }}>
          <Stack color="gray.600">
            <Icon mx="auto" boxSize={10} stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Icon>
            <Text fontWeight="bold" fontSize="16px">
              画像をアップロード
            </Text>
          </Stack>
        </Center>
      ) : (
        <Center w={{ base: '330px', lg: '20vw' }} h={{ base: '470px', lg: '29vw' }}>
          <Img src={preview} alt="preview" />
        </Center>
      )}
    </label>
  );
});
