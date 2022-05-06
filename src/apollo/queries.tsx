import { gql } from '@apollo/client';

//signup時(アカウント登録)にユーザー情報を追加
export const CREATE_USER = gql`
  mutation CreateUser($id: String!, $display_id: String!, $email: String!, $name: String!, $image: String) {
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
//signin時（ログイン）にユーザー情報を取得
export const REACTIVE_VAR_GET_USER = gql`
  query ReactiveVarGetUser($id: String!) {
    users_by_pk(id: $id) {
      id
      display_id
      name
      profile
      email
      image
      created_at
    }
  }
`;
//Homeページで新規投稿のpost情報一覧を取得
export const GET_ALL_POST = gql`
  query GetAllPost($limit: Int!, $offset: Int!) {
    posts(limit: $limit, order_by: { id: asc }, offset: $offset) {
      id
      image
      content
      created_at
      user {
        id
        display_id
        image
        name
      }
      post_comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      post_likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`;
//postsの詳細ページですべてのユーザー情報とpostIdを取得
export const GET_ALL_USERS_WITH_POSTS = gql`
  query GetAllUsersWithPosts {
    users {
      id
      display_id
      posts {
        id
      }
    }
  }
`;
//postsの詳細ページで1件分のpost情報を取得
export const GET_ONE_USER_WITH_POST = gql`
  query GetOneUserWithPost($userId: String!, $postId: uuid!) {
    users(where: { display_id: { _eq: $userId } }) {
      id
      display_id
      name
      image
      posts(where: { id: { _eq: $postId } }) {
        id
        image
        imageUrl
        petName
        petGender
        content
        created_at
        post_tag_size {
          id
          size
        }
        post_tag_recommend {
          id
          recommend
        }
        post_comments {
          id
          comment
          created_at
          user {
            image
            name
            display_id
          }
        }
      }
    }
  }
`;
//postsの詳細ページでlikeの状態を取得
export const GET_POST_LIKE_COUNT = gql`
  query GetPostLikeCount($postId: uuid!) {
    post_likes(where: { post_id: { _eq: $postId } }) {
      id
      post_id
      user_id
    }
  }
`;
//postsの詳細ページでlikeを追加
export const ADD_POST_LIKE = gql`
  mutation AddPostLike($userId: String!, $postId: uuid!) {
    insert_post_likes_one(object: { user_id: $userId, post_id: $postId }) {
      id
      user_id
      post_id
    }
  }
`;
//postsの詳細ページでいいねを削除
export const REMOVE_POST_LIKE = gql`
  mutation RemovePostLike($userId: String!, $postId: uuid!) {
    delete_post_likes(where: { _and: { user_id: { _eq: $userId }, post_id: { _eq: $postId } } }) {
      affected_rows
    }
  }
`;
//postsの詳細ページでコメントを追加
export const ADD_POST_COMMENT = gql`
  mutation AddPostComment($userId: String!, $postId: uuid!, $comment: String!) {
    insert_post_comments_one(object: { user_id: $userId, post_id: $postId, comment: $comment }) {
      id
      comment
      created_at
      user {
        image
        name
        display_id
      }
    }
  }
`;
//postsの詳細ページでコメントをsubscriptionで最新の状態を表示
export const SUBSCRIPTION_POST_COMMENT = gql`
  subscription SubscriptionPostComment($postId: uuid!) {
    post_comments(where: { post_id: { _eq: $postId } }) {
      id
      comment
      created_at
      user {
        image
        name
        display_id
      }
    }
  }
`;
//投稿モーダルで新規投稿
export const INSERT_POST_ONE = gql`
  mutation InsertPostOne(
    $user_id: String!
    $content: String!
    $image: String
    $imageUrl: String
    $petName: String!
    $petGender: String!
    $post_tag_size: String!
    $post_tag_recommend: String!
  ) {
    insert_posts_one(
      object: {
        user_id: $user_id
        content: $content
        image: $image
        imageUrl: $imageUrl
        petName: $petName
        petGender: $petGender
        post_tag_size: { data: { size: $post_tag_size } }
        post_tag_recommend: { data: { recommend: $post_tag_recommend } }
      }
    ) {
      id
      user_id
      content
      image
      imageUrl
      petName
      petGender
      created_at
    }
  }
`;
//投稿モーダルで投稿編集（画像を編集）
export const EDIT_POST_ONE = gql`
  mutation EditPostOne(
    $id: uuid!
    $user_id: String!
    $content: String!
    $image: String!
    $imageUrl: String!
    $petName: String!
    $petGender: String!
  ) {
    insert_posts_one(
      object: {
        id: $id
        user_id: $user_id
        content: $content
        image: $image
        imageUrl: $imageUrl
        petName: $petName
        petGender: $petGender
      }
      on_conflict: {
        constraint: posts_pkey
        update_columns: [content, image, imageUrl, petName, petGender, updated_at]
      }
    ) {
      id
      user_id
      content
      image
      imageUrl
      petName
      petGender
      created_at
    }
  }
`;
//投稿モーダルで投稿編集（画像は編集しない）
export const EDIT_POST_ONE_WITHOUT_IMAGE = gql`
  mutation EditPostOneWithoutImage(
    $id: uuid!
    $user_id: String!
    $content: String!
    $petName: String!
    $petGender: String!
  ) {
    insert_posts_one(
      object: { id: $id, user_id: $user_id, content: $content, petName: $petName, petGender: $petGender }
      on_conflict: { constraint: posts_pkey, update_columns: [content, petName, petGender, updated_at] }
    ) {
      id
      user_id
      content
      image
      imageUrl
      petName
      petGender
      created_at
    }
  }
`;
//EditMenu(postsの詳細ページのアイコン)で投稿を削除
export const DELETE_POST_ONE = gql`
  mutation DelatePostOne($postId: uuid!) {
    delete_posts_by_pk(id: $postId) {
      id
      image
      imageUrl
      user_id
    }
  }
`;
//マイページでプロフィール変更
export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($id: String!, $name: String!, $display_id: String!, $profile: String, $image: String) {
    insert_users_one(
      object: { id: $id, name: $name, display_id: $display_id, profile: $profile, image: $image }
      on_conflict: { constraint: users_pkey, update_columns: [name, display_id, profile, image, updated_at] }
    ) {
      id
      name
      display_id
      profile
      image
    }
  }
`;
//マイページでユーザーの投稿数、いいね数、フォロー数、フォロワー数の各集計値を取得
export const GET_USER_INFOMATION = gql`
  query GetUserInfomation($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      posts_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      post_likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      following_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      followed_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`;
//マイページでユーザー情報と自分が投稿したpost一覧を取得
export const GET_ONE_USER_ALL_POST = gql`
  query GetOneUserAllPost($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      image
      created_at
      posts {
        id
        image
        content
        updated_at
        post_comments_aggregate {
          aggregate {
            count(columns: id)
          }
        }
        post_likes_aggregate {
          aggregate {
            count(columns: id)
          }
        }
      }
    }
  }
`;
//マイページでユーザーのid一覧を取得
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      display_id
    }
  }
`;
//マイページでユーザー情報といいねしたpost一覧を取得
export const GET_ONE_USER_LIKE_POST = gql`
  query GetOneUserLikePost($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      image
      created_at
      post_likes {
        post {
          id
          content
          image
          updated_at
          user {
            id
            display_id
            image
            name
            created_at
          }
          post_comments_aggregate {
            aggregate {
              count(columns: id)
            }
          }
          post_likes_aggregate {
            aggregate {
              count(columns: id)
            }
          }
        }
      }
    }
  }
`;
//Feedページでフォローしているユーザーが投稿したpost一覧を取得
export const GET_FOLLOW_USER_POST = gql`
  query GetFollowUserPost($id: String!) {
    posts(
      where: { user: { followed: { user_id: { _eq: $id } } } }
      order_by: { created_at: asc }
    ) {
      id
      user_id
      image
      petName
      petGender
      content
      created_at
      user {
        id
        display_id
        name
        image
      }
      post_comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      post_likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
    users(where: { followed: { user_id: { _eq: $id } } }) {
      id
      display_id
      name
      profile
      image
      created_at
    }
  }
`;
//フォローページでフォローしているユーザー情報一覧を取得
export const GET_ONE_USER_FOLLOWING = gql`
  query GetOneUserFollowing($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      image
      created_at
      following {
        follow {
          id
          display_id
          name
          image
          created_at
        }
      }
    }
  }
`;
//フォロワーページでフォロワーのユーザー情報一覧を取得
export const GET_ONE_USER_FOLLOWER = gql`
  query GetOneUserFollower($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      id
      display_id
      name
      profile
      image
      created_at
      followed {
        user {
          id
          display_id
          name
          image
          created_at
        }
      }
    }
  }
`;
//フォローボタンでフォローしているユーザーIDを取得
export const IS_FOLLOW_USER = gql`
  query IsFollowUser($fromUserId: String!, $toUserId: String!) {
    relationships(where: { user_id: { _eq: $fromUserId }, follow_id: { _eq: $toUserId } }) {
      id
      user_id
      follow_id
    }
  }
`;
//フォローボタンでフォローを追加
export const ADD_FOLLOW = gql`
  mutation AddFollow($fromUserId: String!, $toUserId: String!) {
    insert_relationships_one(object: { user_id: $fromUserId, follow_id: $toUserId }) {
      id
      user_id
      follow_id
    }
  }
`;
//フォローボタンでフォローを解除
export const REMOVE_FOLLOW = gql`
  mutation RemoveFollow($fromUserId: String!, $toUserId: String!) {
    delete_relationships(where: { user_id: { _eq: $fromUserId }, follow_id: { _eq: $toUserId } }) {
      affected_rows
    }
  }
`;
//検索ページで検索結果を取得
export const GET_SEARCH_RESULT = gql`
  query GetSearchResult($word: String!) {
    users(where: { name: { _ilike: $word } }) {
      id
      display_id
      name
      profile
      image
      created_at
    }
    posts(where: { content: { _ilike: $word } }) {
      id
      user_id
      image
      content
      petName
      petGender
      created_at
      user {
        id
        display_id
        image
        name
      }
      post_comments_aggregate {
        aggregate {
          count(columns: id)
        }
      }
      post_likes_aggregate {
        aggregate {
          count(columns: id)
        }
      }
    }
  }
`;
