/* eslint-disable jsx-a11y/no-autofocus */
import {
  Box,
  Center,
  CircularProgress,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';
import type { VFC } from 'react';
import { useState } from 'react';
import { memo } from 'react';

import { ImageArea } from '../atoms/ImageArea';
import { PrimaryButton } from '../atoms/PrimaryButton';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  postData?: any;
  //型Postsを定義予定
};

export const NewPostModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, postData } = props;

  const [image, setImage] = useState<File | string | null>(null);
  const [petName, setPetName] = useState('');
  const [petGender, setPetGender] = useState('');
  const [petSize, setPetSize] = useState('');
  const [recommend, setRecommend] = useState('');
  const [postMessage, setPostMessage] = useState('');

  const [disableSubmit, setDisableSubmit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onChangePetName = (e: React.ChangeEvent<HTMLInputElement>) => setPetName(e.target.value);
  const onChangePetGender = (e: React.ChangeEvent<HTMLSelectElement>) => setPetGender(e.target.value);
  const onChangePetSize = (e: React.ChangeEvent<HTMLSelectElement>) => setPetSize(e.target.value);
  const onChangeRecommend = (e: React.ChangeEvent<HTMLSelectElement>) => setRecommend(e.target.value);

  const handlePostMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setDisableSubmit(text.length === 0 || text.length > CHARACTER_LIMIT);
    setPostMessage(text);
  };

  const resetState = () => {
    setImage(null);
    setPetName('');
    setPetGender('');
    setPetSize('');
    setRecommend('');
    setPostMessage('');
  };

  const wrapperOnClose = () => {
    if (!confirm('投稿を終了しますか？（内容は破棄されます。）')) return;
    if (!postData) {
      resetState();
    }
    onClose();
  };

  const onClickSubmit = () => {
    setIsLoading(true);
    alert('ポストを投稿');
    setIsLoading(false);
  };

  const CHARACTER_LIMIT = 250;

  return (
    <Modal size="6xl" isOpen={isOpen} onClose={wrapperOnClose} autoFocus={false} scrollBehavior="outside">
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalCloseButton />
        <ModalHeader>
          <Center>ポストを投稿</Center>
        </ModalHeader>
        <ModalBody display="flex" justifyContent="center">
          <Stack direction={{ base: 'column', lg: 'row' }} spacing={4}>
            <Box mx="auto">
              <ImageArea setImage={setImage} image={postData && (image as string)} />
            </Box>
            <Stack spacing={4}>
              <Stack direction={{ base: 'column', lg: 'row' }} spacing={4}>
                <FormControl>
                  <FormLabel>ペットのお名前</FormLabel>
                  <Input placeholder="ペットのお名前を入力" value={petName} onChange={onChangePetName} />
                </FormControl>
                <FormControl>
                  <FormLabel>ペットの性別</FormLabel>
                  <Select placeholder="選択してください" value={petGender} onChange={onChangePetGender}>
                    <option value="option1">男の子</option>
                    <option value="option2">女の子</option>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction={{ base: 'column', lg: 'row' }} spacing={4}>
                <FormControl>
                  <FormLabel>ペットの大きさ</FormLabel>
                  <Select placeholder="選択してください" value={petSize} onChange={onChangePetSize}>
                    <option value="option1">小型犬(10kg未満)</option>
                    <option value="option2">中型犬(25kg未満)</option>
                    <option value="option3">大型犬(25kg以上)</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>それっておすすめ？</FormLabel>
                  <Select placeholder="選択してください" value={recommend} onChange={onChangeRecommend}>
                    <option value="option1">おすすめしたい！</option>
                    <option value="option2">しくじった！？</option>
                  </Select>
                </FormControl>
              </Stack>
              <Box position="relative">
                <Textarea
                  placeholder={`本文を入力（${CHARACTER_LIMIT}文字まで）`}
                  borderColor="transparent"
                  bg="white"
                  borderRadius="14px"
                  pr={{ base: '56px', lg: '90px' }}
                  w={{ base: '88vw', lg: '620px' }}
                  h="250px"
                  value={postMessage}
                  onChange={(e) => {
                    handlePostMessageChange(e);
                  }}
                />
                <Box position="absolute" right="4" top="2" zIndex="1">
                  <CircularProgress
                    value={postMessage.length}
                    ml="10px"
                    size="40px"
                    thickness="7px"
                    max={CHARACTER_LIMIT}
                    color={postMessage.length < CHARACTER_LIMIT ? 'blue.500' : 'red'}
                  />
                </Box>
                {postMessage.length > CHARACTER_LIMIT && (
                  <Text fontSize="sm" color="red">
                    文字数がオーバーしています！
                  </Text>
                )}
              </Box>
              <Flex w="100%" justify="flex-end">
                <PrimaryButton onClick={onClickSubmit} disabled={disableSubmit} loading={isLoading}>
                  投稿
                </PrimaryButton>
              </Flex>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});