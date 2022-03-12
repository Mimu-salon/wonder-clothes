import Cookie from 'universal-cookie';

import { auth } from '../../firebase/firebaseConfig';
import { unSubMeta } from './userUserChanged';

const cookie = new Cookie();

export const useLogout = () => {
  const logout = async () => {
    if (unSubMeta) {
      unSubMeta();
    }
    await auth.signOut();
    cookie.remove('token');
  };
  return { logout };
};
