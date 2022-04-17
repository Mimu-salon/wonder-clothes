import { useCallback } from 'react';

import { onLogin } from '../../apollo/client';
import type firebase from '../../firebase/firebaseConfig';
import { firestore } from '../../firebase/firebaseConfig';

export let unSubMeta: () => void;

export const useUserChanged = () => {
  const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims';

  const unSubUser = useCallback(async (credential: firebase.auth.UserCredential) => {
    const user = credential.user;
    if (user) {
      const token = await user.getIdToken(true);
      const idTokenResult = await user.getIdTokenResult();
      const hasuraClaims = idTokenResult.claims[HASURA_TOKEN_KEY];
      if (hasuraClaims) {
        onLogin(token);
      } else {
        const userRef = firestore.collection('user_meta').doc(user.uid);
        unSubMeta = userRef.onSnapshot(async () => {
          const token = await user.getIdToken(true);
          const idTokenResultSnap = await user.getIdTokenResult();
          const hasuraClaimsSnap = idTokenResultSnap.claims[HASURA_TOKEN_KEY];
          if (hasuraClaimsSnap) {
            onLogin(token);
          }
        });
      }
    }
  }, []);

  return { unSubUser };
};
