/* eslint-disable no-console */
import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useState } from 'react';

import { auth } from '../../firebase/firebaseConfig';

export const useFirebaseAuth = () => {
  console.log('useFirebaseAuth');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const emailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const passwordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);
  const resetInput = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);
  const toggleIsLogin = useCallback(() => {
    setIsLogin(!isLogin);
  }, [isLogin]);
  const authUser = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isLogin) {
        try {
          await auth.signInWithEmailAndPassword(email, password);
        } catch {
          alert('ログインできません');
        }
        resetInput();
      } else {
        try {
          await auth.createUserWithEmailAndPassword(email, password);
        } catch {
          alert('ユーザーが見つかりません');
        }
        resetInput();
      }
    },
    [email, password, isLogin, resetInput],
  );

  return {
    email,
    password,
    emailChange,
    passwordChange,
    resetInput,
    isLogin,
    toggleIsLogin,
    authUser,
  };
};
