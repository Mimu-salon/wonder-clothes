import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookie from 'universal-cookie';

import { auth, firestore } from '../../firebase/firebaseConfig';

export let unSubMeta: () => void;

export const useUserChanged = () => {
  const cookie = new Cookie();
  const router = useRouter();
  const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';
  useEffect(() => {
    const unSubUser = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken(true);
        const idTokenResult = await user.getIdTokenResult();
        const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
        if (hasuraClaims) {
          cookie.set('token', token, { path: '/' });
          router.push('/');
        } else {
          const userRef = firestore.collection('user_meta').doc(user.uid);
          unSubMeta = userRef.onSnapshot(async () => {
            const tokenSnap = await user.getIdToken(true);
            const idTokenResultSnap = await user.getIdTokenResult();
            const hasuraClaimsSnap = idTokenResultSnap.claims[HASURA_TOKEN_KEY];
            if (hasuraClaimsSnap) {
              cookie.set('token', tokenSnap, { path: '/' });
              router.push('/');
            }
          });
        }
      }
    });
    return () => {
      unSubUser();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {};
};
