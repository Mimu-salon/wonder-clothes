import type { ReactiveVar } from '@apollo/client';
import { InMemoryCache, makeVar } from '@apollo/client';

import type { LoginUser } from '../utils/User';

export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(null);
export const isShowPostModalVar: ReactiveVar<boolean> = makeVar<boolean>(false);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        loginUser: {
          read() {
            return loginUserVar();
          },
        },
        isShowPostModal: {
          read() {
            return isShowPostModalVar();
          },
        },
      },
    },
  },
});
