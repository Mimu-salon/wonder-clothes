import type { Users } from '../apollo/graphql';

export type LoginUser = Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'email' | 'image' | 'created_at'> | null;
