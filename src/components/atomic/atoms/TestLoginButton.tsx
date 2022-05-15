import { Button } from '@chakra-ui/button';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { memo } from 'react';

import { auth } from '../../../firebase/firebaseConfig';
import { userLoginAction } from '../../../pages/signin';
import { useMessage } from '../../hooks/useMessage';
import { useUserChanged } from '../../hooks/userUserChanged';

export const TestLoginButton: VFC = memo(() => {
  const router = useRouter();
  const { showMessage } = useMessage();
  const { unSubUser } = useUserChanged();

  const handleTestLogin = () => {
    auth
      .signInWithEmailAndPassword('test@example.com', 'password')
      .then(async (userCredential) => {
        await unSubUser(userCredential);
        await userLoginAction(userCredential);
        router.push('/');
      })
      .catch((error) => {
        console.error(error.code, error.message);
        showMessage({
          title: 'エラーが発生しました',
          status: 'error',
        });
      });
  };

  return (
    <Button
      rightIcon={<ArrowRightIcon />}
      colorScheme={'blue'}
      variant="solid"
      _hover={{ bg: 'blue.600' }}
      onClick={handleTestLogin}>
      テストログイン
    </Button>
  );
});
