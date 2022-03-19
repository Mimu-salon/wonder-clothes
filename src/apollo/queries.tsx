import { gql } from '@apollo/client';

//signup時(アカウント登録)
export const CREATE_USER = gql`
  mutation createUser($id: uuid!, $display_id: String!, $email: String!, $name: String!, $image: String) {
    insert_users_one(object: { id: $id, display_id: $display_id, name: $name, email: $email, image: $image }) {
      id
      display_id
      email
      name
      image
      created_at
    }
  }
`;
//signin時（ログイン）
