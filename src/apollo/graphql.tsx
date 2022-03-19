import type * as ApolloReactCommon from '@apollo/client';
import { gql } from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "followings" */
export type Followings = {
  __typename?: 'followings';
  id: Scalars['uuid'];
  /** An array relationship */
  relationships: Array<Relationships>;
  /** An aggregate relationship */
  relationships_aggregate: RelationshipsAggregate;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "followings" */
export type FollowingsRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};


/** columns and relationships of "followings" */
export type FollowingsRelationshipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};

/** aggregated selection of "followings" */
export type FollowingsAggregate = {
  __typename?: 'followings_aggregate';
  aggregate?: Maybe<FollowingsAggregateFields>;
  nodes: Array<Followings>;
};

/** aggregate fields of "followings" */
export type FollowingsAggregateFields = {
  __typename?: 'followings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FollowingsMaxFields>;
  min?: Maybe<FollowingsMinFields>;
};


/** aggregate fields of "followings" */
export type FollowingsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FollowingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "followings". All fields are combined with a logical 'AND'. */
export type FollowingsBoolExp = {
  _and?: InputMaybe<Array<FollowingsBoolExp>>;
  _not?: InputMaybe<FollowingsBoolExp>;
  _or?: InputMaybe<Array<FollowingsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  relationships?: InputMaybe<RelationshipsBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "followings" */
export enum FollowingsConstraint {
  /** unique or primary key constraint */
  FOLLOWINGS_PKEY = 'followings_pkey',
  /** unique or primary key constraint */
  FOLLOWINGS_USER_ID_KEY = 'followings_user_id_key'
}

/** input type for inserting data into table "followings" */
export type FollowingsInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  relationships?: InputMaybe<RelationshipsArrRelInsertInput>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FollowingsMaxFields = {
  __typename?: 'followings_max_fields';
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type FollowingsMinFields = {
  __typename?: 'followings_min_fields';
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "followings" */
export type FollowingsMutationResponse = {
  __typename?: 'followings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Followings>;
};

/** input type for inserting object relation for remote table "followings" */
export type FollowingsObjRelInsertInput = {
  data: FollowingsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<FollowingsOnConflict>;
};

/** on_conflict condition type for table "followings" */
export type FollowingsOnConflict = {
  constraint: FollowingsConstraint;
  update_columns?: Array<FollowingsUpdateColumn>;
  where?: InputMaybe<FollowingsBoolExp>;
};

/** Ordering options when selecting data from "followings". */
export type FollowingsOrderBy = {
  id?: InputMaybe<OrderBy>;
  relationships_aggregate?: InputMaybe<RelationshipsAggregateOrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: followings */
export type FollowingsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "followings" */
export enum FollowingsSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "followings" */
export type FollowingsSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "followings" */
export enum FollowingsUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "followings" */
  delete_followings?: Maybe<FollowingsMutationResponse>;
  /** delete single row from the table: "followings" */
  delete_followings_by_pk?: Maybe<Followings>;
  /** delete data from the table: "notification" */
  delete_notification?: Maybe<NotificationMutationResponse>;
  /** delete single row from the table: "notification" */
  delete_notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "post_comments" */
  delete_post_comments?: Maybe<PostCommentsMutationResponse>;
  /** delete single row from the table: "post_comments" */
  delete_post_comments_by_pk?: Maybe<PostComments>;
  /** delete data from the table: "post_likes" */
  delete_post_likes?: Maybe<PostLikesMutationResponse>;
  /** delete single row from the table: "post_likes" */
  delete_post_likes_by_pk?: Maybe<PostLikes>;
  /** delete data from the table: "post_tag_recommend" */
  delete_post_tag_recommend?: Maybe<PostTagRecommendMutationResponse>;
  /** delete single row from the table: "post_tag_recommend" */
  delete_post_tag_recommend_by_pk?: Maybe<PostTagRecommend>;
  /** delete data from the table: "post_tag_size" */
  delete_post_tag_size?: Maybe<PostTagSizeMutationResponse>;
  /** delete single row from the table: "post_tag_size" */
  delete_post_tag_size_by_pk?: Maybe<PostTagSize>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<PostsMutationResponse>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "relationships" */
  delete_relationships?: Maybe<RelationshipsMutationResponse>;
  /** delete single row from the table: "relationships" */
  delete_relationships_by_pk?: Maybe<Relationships>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "followings" */
  insert_followings?: Maybe<FollowingsMutationResponse>;
  /** insert a single row into the table: "followings" */
  insert_followings_one?: Maybe<Followings>;
  /** insert data into the table: "notification" */
  insert_notification?: Maybe<NotificationMutationResponse>;
  /** insert a single row into the table: "notification" */
  insert_notification_one?: Maybe<Notification>;
  /** insert data into the table: "post_comments" */
  insert_post_comments?: Maybe<PostCommentsMutationResponse>;
  /** insert a single row into the table: "post_comments" */
  insert_post_comments_one?: Maybe<PostComments>;
  /** insert data into the table: "post_likes" */
  insert_post_likes?: Maybe<PostLikesMutationResponse>;
  /** insert a single row into the table: "post_likes" */
  insert_post_likes_one?: Maybe<PostLikes>;
  /** insert data into the table: "post_tag_recommend" */
  insert_post_tag_recommend?: Maybe<PostTagRecommendMutationResponse>;
  /** insert a single row into the table: "post_tag_recommend" */
  insert_post_tag_recommend_one?: Maybe<PostTagRecommend>;
  /** insert data into the table: "post_tag_size" */
  insert_post_tag_size?: Maybe<PostTagSizeMutationResponse>;
  /** insert a single row into the table: "post_tag_size" */
  insert_post_tag_size_one?: Maybe<PostTagSize>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<PostsMutationResponse>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "relationships" */
  insert_relationships?: Maybe<RelationshipsMutationResponse>;
  /** insert a single row into the table: "relationships" */
  insert_relationships_one?: Maybe<Relationships>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "followings" */
  update_followings?: Maybe<FollowingsMutationResponse>;
  /** update single row of the table: "followings" */
  update_followings_by_pk?: Maybe<Followings>;
  /** update data of the table: "notification" */
  update_notification?: Maybe<NotificationMutationResponse>;
  /** update single row of the table: "notification" */
  update_notification_by_pk?: Maybe<Notification>;
  /** update data of the table: "post_comments" */
  update_post_comments?: Maybe<PostCommentsMutationResponse>;
  /** update single row of the table: "post_comments" */
  update_post_comments_by_pk?: Maybe<PostComments>;
  /** update data of the table: "post_likes" */
  update_post_likes?: Maybe<PostLikesMutationResponse>;
  /** update single row of the table: "post_likes" */
  update_post_likes_by_pk?: Maybe<PostLikes>;
  /** update data of the table: "post_tag_recommend" */
  update_post_tag_recommend?: Maybe<PostTagRecommendMutationResponse>;
  /** update single row of the table: "post_tag_recommend" */
  update_post_tag_recommend_by_pk?: Maybe<PostTagRecommend>;
  /** update data of the table: "post_tag_size" */
  update_post_tag_size?: Maybe<PostTagSizeMutationResponse>;
  /** update single row of the table: "post_tag_size" */
  update_post_tag_size_by_pk?: Maybe<PostTagSize>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<PostsMutationResponse>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "relationships" */
  update_relationships?: Maybe<RelationshipsMutationResponse>;
  /** update single row of the table: "relationships" */
  update_relationships_by_pk?: Maybe<Relationships>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type MutationRootDeleteFollowingsArgs = {
  where: FollowingsBoolExp;
};


/** mutation root */
export type MutationRootDeleteFollowingsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteNotificationArgs = {
  where: NotificationBoolExp;
};


/** mutation root */
export type MutationRootDeleteNotificationByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostCommentsArgs = {
  where: PostCommentsBoolExp;
};


/** mutation root */
export type MutationRootDeletePostCommentsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostLikesArgs = {
  where: PostLikesBoolExp;
};


/** mutation root */
export type MutationRootDeletePostLikesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostTagRecommendArgs = {
  where: PostTagRecommendBoolExp;
};


/** mutation root */
export type MutationRootDeletePostTagRecommendByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostTagSizeArgs = {
  where: PostTagSizeBoolExp;
};


/** mutation root */
export type MutationRootDeletePostTagSizeByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeletePostsArgs = {
  where: PostsBoolExp;
};


/** mutation root */
export type MutationRootDeletePostsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteRelationshipsArgs = {
  where: RelationshipsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRelationshipsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertFollowingsArgs = {
  objects: Array<FollowingsInsertInput>;
  on_conflict?: InputMaybe<FollowingsOnConflict>;
};


/** mutation root */
export type MutationRootInsertFollowingsOneArgs = {
  object: FollowingsInsertInput;
  on_conflict?: InputMaybe<FollowingsOnConflict>;
};


/** mutation root */
export type MutationRootInsertNotificationArgs = {
  objects: Array<NotificationInsertInput>;
  on_conflict?: InputMaybe<NotificationOnConflict>;
};


/** mutation root */
export type MutationRootInsertNotificationOneArgs = {
  object: NotificationInsertInput;
  on_conflict?: InputMaybe<NotificationOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostCommentsArgs = {
  objects: Array<PostCommentsInsertInput>;
  on_conflict?: InputMaybe<PostCommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostCommentsOneArgs = {
  object: PostCommentsInsertInput;
  on_conflict?: InputMaybe<PostCommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostLikesArgs = {
  objects: Array<PostLikesInsertInput>;
  on_conflict?: InputMaybe<PostLikesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostLikesOneArgs = {
  object: PostLikesInsertInput;
  on_conflict?: InputMaybe<PostLikesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTagRecommendArgs = {
  objects: Array<PostTagRecommendInsertInput>;
  on_conflict?: InputMaybe<PostTagRecommendOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTagRecommendOneArgs = {
  object: PostTagRecommendInsertInput;
  on_conflict?: InputMaybe<PostTagRecommendOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTagSizeArgs = {
  objects: Array<PostTagSizeInsertInput>;
  on_conflict?: InputMaybe<PostTagSizeOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostTagSizeOneArgs = {
  object: PostTagSizeInsertInput;
  on_conflict?: InputMaybe<PostTagSizeOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostsArgs = {
  objects: Array<PostsInsertInput>;
  on_conflict?: InputMaybe<PostsOnConflict>;
};


/** mutation root */
export type MutationRootInsertPostsOneArgs = {
  object: PostsInsertInput;
  on_conflict?: InputMaybe<PostsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRelationshipsArgs = {
  objects: Array<RelationshipsInsertInput>;
  on_conflict?: InputMaybe<RelationshipsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRelationshipsOneArgs = {
  object: RelationshipsInsertInput;
  on_conflict?: InputMaybe<RelationshipsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateFollowingsArgs = {
  _set?: InputMaybe<FollowingsSetInput>;
  where: FollowingsBoolExp;
};


/** mutation root */
export type MutationRootUpdateFollowingsByPkArgs = {
  _set?: InputMaybe<FollowingsSetInput>;
  pk_columns: FollowingsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateNotificationArgs = {
  _set?: InputMaybe<NotificationSetInput>;
  where: NotificationBoolExp;
};


/** mutation root */
export type MutationRootUpdateNotificationByPkArgs = {
  _set?: InputMaybe<NotificationSetInput>;
  pk_columns: NotificationPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostCommentsArgs = {
  _set?: InputMaybe<PostCommentsSetInput>;
  where: PostCommentsBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostCommentsByPkArgs = {
  _set?: InputMaybe<PostCommentsSetInput>;
  pk_columns: PostCommentsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostLikesArgs = {
  _set?: InputMaybe<PostLikesSetInput>;
  where: PostLikesBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostLikesByPkArgs = {
  _set?: InputMaybe<PostLikesSetInput>;
  pk_columns: PostLikesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostTagRecommendArgs = {
  _set?: InputMaybe<PostTagRecommendSetInput>;
  where: PostTagRecommendBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostTagRecommendByPkArgs = {
  _set?: InputMaybe<PostTagRecommendSetInput>;
  pk_columns: PostTagRecommendPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostTagSizeArgs = {
  _set?: InputMaybe<PostTagSizeSetInput>;
  where: PostTagSizeBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostTagSizeByPkArgs = {
  _set?: InputMaybe<PostTagSizeSetInput>;
  pk_columns: PostTagSizePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePostsArgs = {
  _set?: InputMaybe<PostsSetInput>;
  where: PostsBoolExp;
};


/** mutation root */
export type MutationRootUpdatePostsByPkArgs = {
  _set?: InputMaybe<PostsSetInput>;
  pk_columns: PostsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRelationshipsArgs = {
  _set?: InputMaybe<RelationshipsSetInput>;
  where: RelationshipsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRelationshipsByPkArgs = {
  _set?: InputMaybe<RelationshipsSetInput>;
  pk_columns: RelationshipsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** columns and relationships of "notification" */
export type Notification = {
  __typename?: 'notification';
  id: Scalars['uuid'];
  text: Scalars['String'];
  type: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "notification" */
export type NotificationAggregate = {
  __typename?: 'notification_aggregate';
  aggregate?: Maybe<NotificationAggregateFields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type NotificationAggregateFields = {
  __typename?: 'notification_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<NotificationMaxFields>;
  min?: Maybe<NotificationMinFields>;
};


/** aggregate fields of "notification" */
export type NotificationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<NotificationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notification" */
export type NotificationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<NotificationMaxOrderBy>;
  min?: InputMaybe<NotificationMinOrderBy>;
};

/** input type for inserting array relation for remote table "notification" */
export type NotificationArrRelInsertInput = {
  data: Array<NotificationInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<NotificationOnConflict>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type NotificationBoolExp = {
  _and?: InputMaybe<Array<NotificationBoolExp>>;
  _not?: InputMaybe<NotificationBoolExp>;
  _or?: InputMaybe<Array<NotificationBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  text?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "notification" */
export enum NotificationConstraint {
  /** unique or primary key constraint */
  NOTIFICATION_PKEY = 'notification_pkey'
}

/** input type for inserting data into table "notification" */
export type NotificationInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type NotificationMaxFields = {
  __typename?: 'notification_max_fields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "notification" */
export type NotificationMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type NotificationMinFields = {
  __typename?: 'notification_min_fields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "notification" */
export type NotificationMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "notification" */
export type NotificationMutationResponse = {
  __typename?: 'notification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
};

/** on_conflict condition type for table "notification" */
export type NotificationOnConflict = {
  constraint: NotificationConstraint;
  update_columns?: Array<NotificationUpdateColumn>;
  where?: InputMaybe<NotificationBoolExp>;
};

/** Ordering options when selecting data from "notification". */
export type NotificationOrderBy = {
  id?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: notification */
export type NotificationPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "notification" */
export enum NotificationSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  TEXT = 'text',
  /** column name */
  TYPE = 'type',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "notification" */
export type NotificationSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "notification" */
export enum NotificationUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  TEXT = 'text',
  /** column name */
  TYPE = 'type',
  /** column name */
  USER_ID = 'user_id'
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

/** columns and relationships of "post_comments" */
export type PostComments = {
  __typename?: 'post_comments';
  comment: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "post_comments" */
export type PostCommentsAggregate = {
  __typename?: 'post_comments_aggregate';
  aggregate?: Maybe<PostCommentsAggregateFields>;
  nodes: Array<PostComments>;
};

/** aggregate fields of "post_comments" */
export type PostCommentsAggregateFields = {
  __typename?: 'post_comments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostCommentsMaxFields>;
  min?: Maybe<PostCommentsMinFields>;
};


/** aggregate fields of "post_comments" */
export type PostCommentsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostCommentsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_comments" */
export type PostCommentsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostCommentsMaxOrderBy>;
  min?: InputMaybe<PostCommentsMinOrderBy>;
};

/** input type for inserting array relation for remote table "post_comments" */
export type PostCommentsArrRelInsertInput = {
  data: Array<PostCommentsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<PostCommentsOnConflict>;
};

/** Boolean expression to filter rows from the table "post_comments". All fields are combined with a logical 'AND'. */
export type PostCommentsBoolExp = {
  _and?: InputMaybe<Array<PostCommentsBoolExp>>;
  _not?: InputMaybe<PostCommentsBoolExp>;
  _or?: InputMaybe<Array<PostCommentsBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "post_comments" */
export enum PostCommentsConstraint {
  /** unique or primary key constraint */
  POST_COMMENTS_PKEY = 'post_comments_pkey'
}

/** input type for inserting data into table "post_comments" */
export type PostCommentsInsertInput = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type PostCommentsMaxFields = {
  __typename?: 'post_comments_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "post_comments" */
export type PostCommentsMaxOrderBy = {
  comment?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostCommentsMinFields = {
  __typename?: 'post_comments_min_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "post_comments" */
export type PostCommentsMinOrderBy = {
  comment?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "post_comments" */
export type PostCommentsMutationResponse = {
  __typename?: 'post_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostComments>;
};

/** on_conflict condition type for table "post_comments" */
export type PostCommentsOnConflict = {
  constraint: PostCommentsConstraint;
  update_columns?: Array<PostCommentsUpdateColumn>;
  where?: InputMaybe<PostCommentsBoolExp>;
};

/** Ordering options when selecting data from "post_comments". */
export type PostCommentsOrderBy = {
  comment?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_comments */
export type PostCommentsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "post_comments" */
export enum PostCommentsSelectColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "post_comments" */
export type PostCommentsSetInput = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "post_comments" */
export enum PostCommentsUpdateColumn {
  /** column name */
  COMMENT = 'comment',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id'
}

/** columns and relationships of "post_likes" */
export type PostLikes = {
  __typename?: 'post_likes';
  id: Scalars['uuid'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "post_likes" */
export type PostLikesAggregate = {
  __typename?: 'post_likes_aggregate';
  aggregate?: Maybe<PostLikesAggregateFields>;
  nodes: Array<PostLikes>;
};

/** aggregate fields of "post_likes" */
export type PostLikesAggregateFields = {
  __typename?: 'post_likes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostLikesMaxFields>;
  min?: Maybe<PostLikesMinFields>;
};


/** aggregate fields of "post_likes" */
export type PostLikesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostLikesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_likes" */
export type PostLikesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostLikesMaxOrderBy>;
  min?: InputMaybe<PostLikesMinOrderBy>;
};

/** input type for inserting array relation for remote table "post_likes" */
export type PostLikesArrRelInsertInput = {
  data: Array<PostLikesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<PostLikesOnConflict>;
};

/** Boolean expression to filter rows from the table "post_likes". All fields are combined with a logical 'AND'. */
export type PostLikesBoolExp = {
  _and?: InputMaybe<Array<PostLikesBoolExp>>;
  _not?: InputMaybe<PostLikesBoolExp>;
  _or?: InputMaybe<Array<PostLikesBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "post_likes" */
export enum PostLikesConstraint {
  /** unique or primary key constraint */
  POST_LIKES_PKEY = 'post_likes_pkey'
}

/** input type for inserting data into table "post_likes" */
export type PostLikesInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type PostLikesMaxFields = {
  __typename?: 'post_likes_max_fields';
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "post_likes" */
export type PostLikesMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostLikesMinFields = {
  __typename?: 'post_likes_min_fields';
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "post_likes" */
export type PostLikesMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "post_likes" */
export type PostLikesMutationResponse = {
  __typename?: 'post_likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostLikes>;
};

/** on_conflict condition type for table "post_likes" */
export type PostLikesOnConflict = {
  constraint: PostLikesConstraint;
  update_columns?: Array<PostLikesUpdateColumn>;
  where?: InputMaybe<PostLikesBoolExp>;
};

/** Ordering options when selecting data from "post_likes". */
export type PostLikesOrderBy = {
  id?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_likes */
export type PostLikesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "post_likes" */
export enum PostLikesSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "post_likes" */
export type PostLikesSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "post_likes" */
export enum PostLikesUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id'
}

/** columns and relationships of "post_tag_recommend" */
export type PostTagRecommend = {
  __typename?: 'post_tag_recommend';
  id: Scalars['uuid'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  recommend: Scalars['String'];
};

/** aggregated selection of "post_tag_recommend" */
export type PostTagRecommendAggregate = {
  __typename?: 'post_tag_recommend_aggregate';
  aggregate?: Maybe<PostTagRecommendAggregateFields>;
  nodes: Array<PostTagRecommend>;
};

/** aggregate fields of "post_tag_recommend" */
export type PostTagRecommendAggregateFields = {
  __typename?: 'post_tag_recommend_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostTagRecommendMaxFields>;
  min?: Maybe<PostTagRecommendMinFields>;
};


/** aggregate fields of "post_tag_recommend" */
export type PostTagRecommendAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostTagRecommendSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_tag_recommend". All fields are combined with a logical 'AND'. */
export type PostTagRecommendBoolExp = {
  _and?: InputMaybe<Array<PostTagRecommendBoolExp>>;
  _not?: InputMaybe<PostTagRecommendBoolExp>;
  _or?: InputMaybe<Array<PostTagRecommendBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  recommend?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "post_tag_recommend" */
export enum PostTagRecommendConstraint {
  /** unique or primary key constraint */
  POST_TAG_RECOMMEND_PKEY = 'post_tag_recommend_pkey',
  /** unique or primary key constraint */
  POST_TAG_RECOMMEND_POST_ID_KEY = 'post_tag_recommend_post_id_key'
}

/** input type for inserting data into table "post_tag_recommend" */
export type PostTagRecommendInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  recommend?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostTagRecommendMaxFields = {
  __typename?: 'post_tag_recommend_max_fields';
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  recommend?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostTagRecommendMinFields = {
  __typename?: 'post_tag_recommend_min_fields';
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  recommend?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_tag_recommend" */
export type PostTagRecommendMutationResponse = {
  __typename?: 'post_tag_recommend_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostTagRecommend>;
};

/** input type for inserting object relation for remote table "post_tag_recommend" */
export type PostTagRecommendObjRelInsertInput = {
  data: PostTagRecommendInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<PostTagRecommendOnConflict>;
};

/** on_conflict condition type for table "post_tag_recommend" */
export type PostTagRecommendOnConflict = {
  constraint: PostTagRecommendConstraint;
  update_columns?: Array<PostTagRecommendUpdateColumn>;
  where?: InputMaybe<PostTagRecommendBoolExp>;
};

/** Ordering options when selecting data from "post_tag_recommend". */
export type PostTagRecommendOrderBy = {
  id?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  recommend?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_tag_recommend */
export type PostTagRecommendPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "post_tag_recommend" */
export enum PostTagRecommendSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  RECOMMEND = 'recommend'
}

/** input type for updating data in table "post_tag_recommend" */
export type PostTagRecommendSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  recommend?: InputMaybe<Scalars['String']>;
};

/** update columns of table "post_tag_recommend" */
export enum PostTagRecommendUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  RECOMMEND = 'recommend'
}

/** columns and relationships of "post_tag_size" */
export type PostTagSize = {
  __typename?: 'post_tag_size';
  id: Scalars['uuid'];
  /** An object relationship */
  post: Posts;
  post_id: Scalars['uuid'];
  size: Scalars['String'];
};

/** aggregated selection of "post_tag_size" */
export type PostTagSizeAggregate = {
  __typename?: 'post_tag_size_aggregate';
  aggregate?: Maybe<PostTagSizeAggregateFields>;
  nodes: Array<PostTagSize>;
};

/** aggregate fields of "post_tag_size" */
export type PostTagSizeAggregateFields = {
  __typename?: 'post_tag_size_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostTagSizeMaxFields>;
  min?: Maybe<PostTagSizeMinFields>;
};


/** aggregate fields of "post_tag_size" */
export type PostTagSizeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostTagSizeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "post_tag_size". All fields are combined with a logical 'AND'. */
export type PostTagSizeBoolExp = {
  _and?: InputMaybe<Array<PostTagSizeBoolExp>>;
  _not?: InputMaybe<PostTagSizeBoolExp>;
  _or?: InputMaybe<Array<PostTagSizeBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  post_id?: InputMaybe<UuidComparisonExp>;
  size?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "post_tag_size" */
export enum PostTagSizeConstraint {
  /** unique or primary key constraint */
  POST_TAG_SIZE_PKEY = 'post_tag_size_pkey',
  /** unique or primary key constraint */
  POST_TAG_SIZE_POST_ID_KEY = 'post_tag_size_post_id_key'
}

/** input type for inserting data into table "post_tag_size" */
export type PostTagSizeInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostTagSizeMaxFields = {
  __typename?: 'post_tag_size_max_fields';
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type PostTagSizeMinFields = {
  __typename?: 'post_tag_size_min_fields';
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "post_tag_size" */
export type PostTagSizeMutationResponse = {
  __typename?: 'post_tag_size_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PostTagSize>;
};

/** input type for inserting object relation for remote table "post_tag_size" */
export type PostTagSizeObjRelInsertInput = {
  data: PostTagSizeInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<PostTagSizeOnConflict>;
};

/** on_conflict condition type for table "post_tag_size" */
export type PostTagSizeOnConflict = {
  constraint: PostTagSizeConstraint;
  update_columns?: Array<PostTagSizeUpdateColumn>;
  where?: InputMaybe<PostTagSizeBoolExp>;
};

/** Ordering options when selecting data from "post_tag_size". */
export type PostTagSizeOrderBy = {
  id?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  post_id?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_tag_size */
export type PostTagSizePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "post_tag_size" */
export enum PostTagSizeSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  SIZE = 'size'
}

/** input type for updating data in table "post_tag_size" */
export type PostTagSizeSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['String']>;
};

/** update columns of table "post_tag_size" */
export enum PostTagSizeUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  SIZE = 'size'
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  petName: Scalars['String'];
  /** An array relationship */
  post_comments: Array<PostComments>;
  /** An aggregate relationship */
  post_comments_aggregate: PostCommentsAggregate;
  /** An array relationship */
  post_likes: Array<PostLikes>;
  /** An aggregate relationship */
  post_likes_aggregate: PostLikesAggregate;
  /** An object relationship */
  post_tag_recommend?: Maybe<PostTagRecommend>;
  /** An object relationship */
  post_tag_size?: Maybe<PostTagSize>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "posts" */
export type PostsPostCommentsArgs = {
  distinct_on?: InputMaybe<Array<PostCommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostCommentsOrderBy>>;
  where?: InputMaybe<PostCommentsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsPostCommentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostCommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostCommentsOrderBy>>;
  where?: InputMaybe<PostCommentsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsPostLikesArgs = {
  distinct_on?: InputMaybe<Array<PostLikesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikesOrderBy>>;
  where?: InputMaybe<PostLikesBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsPostLikesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostLikesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikesOrderBy>>;
  where?: InputMaybe<PostLikesBoolExp>;
};

/** aggregated selection of "posts" */
export type PostsAggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<PostsAggregateFields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type PostsAggregateFields = {
  __typename?: 'posts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<PostsMaxFields>;
  min?: Maybe<PostsMinFields>;
};


/** aggregate fields of "posts" */
export type PostsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type PostsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostsMaxOrderBy>;
  min?: InputMaybe<PostsMinOrderBy>;
};

/** input type for inserting array relation for remote table "posts" */
export type PostsArrRelInsertInput = {
  data: Array<PostsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<PostsOnConflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostsBoolExp = {
  _and?: InputMaybe<Array<PostsBoolExp>>;
  _not?: InputMaybe<PostsBoolExp>;
  _or?: InputMaybe<Array<PostsBoolExp>>;
  content?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  imageUrl?: InputMaybe<StringComparisonExp>;
  petName?: InputMaybe<StringComparisonExp>;
  post_comments?: InputMaybe<PostCommentsBoolExp>;
  post_likes?: InputMaybe<PostLikesBoolExp>;
  post_tag_recommend?: InputMaybe<PostTagRecommendBoolExp>;
  post_tag_size?: InputMaybe<PostTagSizeBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export enum PostsConstraint {
  /** unique or primary key constraint */
  POSTS_PKEY = 'posts_pkey'
}

/** input type for inserting data into table "posts" */
export type PostsInsertInput = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  petName?: InputMaybe<Scalars['String']>;
  post_comments?: InputMaybe<PostCommentsArrRelInsertInput>;
  post_likes?: InputMaybe<PostLikesArrRelInsertInput>;
  post_tag_recommend?: InputMaybe<PostTagRecommendObjRelInsertInput>;
  post_tag_size?: InputMaybe<PostTagSizeObjRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type PostsMaxFields = {
  __typename?: 'posts_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  petName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  imageUrl?: InputMaybe<OrderBy>;
  petName?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostsMinFields = {
  __typename?: 'posts_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  petName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  imageUrl?: InputMaybe<OrderBy>;
  petName?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "posts" */
export type PostsMutationResponse = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type PostsObjRelInsertInput = {
  data: PostsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<PostsOnConflict>;
};

/** on_conflict condition type for table "posts" */
export type PostsOnConflict = {
  constraint: PostsConstraint;
  update_columns?: Array<PostsUpdateColumn>;
  where?: InputMaybe<PostsBoolExp>;
};

/** Ordering options when selecting data from "posts". */
export type PostsOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  imageUrl?: InputMaybe<OrderBy>;
  petName?: InputMaybe<OrderBy>;
  post_comments_aggregate?: InputMaybe<PostCommentsAggregateOrderBy>;
  post_likes_aggregate?: InputMaybe<PostLikesAggregateOrderBy>;
  post_tag_recommend?: InputMaybe<PostTagRecommendOrderBy>;
  post_tag_size?: InputMaybe<PostTagSizeOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: posts */
export type PostsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "posts" */
export enum PostsSelectColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  IMAGEURL = 'imageUrl',
  /** column name */
  PETNAME = 'petName',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "posts" */
export type PostsSetInput = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  petName?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "posts" */
export enum PostsUpdateColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  IMAGEURL = 'imageUrl',
  /** column name */
  PETNAME = 'petName',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "followings" */
  followings: Array<Followings>;
  /** fetch aggregated fields from the table: "followings" */
  followings_aggregate: FollowingsAggregate;
  /** fetch data from the table: "followings" using primary key columns */
  followings_by_pk?: Maybe<Followings>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: NotificationAggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** An array relationship */
  post_comments: Array<PostComments>;
  /** An aggregate relationship */
  post_comments_aggregate: PostCommentsAggregate;
  /** fetch data from the table: "post_comments" using primary key columns */
  post_comments_by_pk?: Maybe<PostComments>;
  /** An array relationship */
  post_likes: Array<PostLikes>;
  /** An aggregate relationship */
  post_likes_aggregate: PostLikesAggregate;
  /** fetch data from the table: "post_likes" using primary key columns */
  post_likes_by_pk?: Maybe<PostLikes>;
  /** fetch data from the table: "post_tag_recommend" */
  post_tag_recommend: Array<PostTagRecommend>;
  /** fetch aggregated fields from the table: "post_tag_recommend" */
  post_tag_recommend_aggregate: PostTagRecommendAggregate;
  /** fetch data from the table: "post_tag_recommend" using primary key columns */
  post_tag_recommend_by_pk?: Maybe<PostTagRecommend>;
  /** fetch data from the table: "post_tag_size" */
  post_tag_size: Array<PostTagSize>;
  /** fetch aggregated fields from the table: "post_tag_size" */
  post_tag_size_aggregate: PostTagSizeAggregate;
  /** fetch data from the table: "post_tag_size" using primary key columns */
  post_tag_size_by_pk?: Maybe<PostTagSize>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  relationships: Array<Relationships>;
  /** An aggregate relationship */
  relationships_aggregate: RelationshipsAggregate;
  /** fetch data from the table: "relationships" using primary key columns */
  relationships_by_pk?: Maybe<Relationships>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type QueryRootFollowingsArgs = {
  distinct_on?: InputMaybe<Array<FollowingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FollowingsOrderBy>>;
  where?: InputMaybe<FollowingsBoolExp>;
};


export type QueryRootFollowingsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FollowingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FollowingsOrderBy>>;
  where?: InputMaybe<FollowingsBoolExp>;
};


export type QueryRootFollowingsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootNotificationArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};


export type QueryRootNotificationAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};


export type QueryRootNotificationByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostCommentsArgs = {
  distinct_on?: InputMaybe<Array<PostCommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostCommentsOrderBy>>;
  where?: InputMaybe<PostCommentsBoolExp>;
};


export type QueryRootPostCommentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostCommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostCommentsOrderBy>>;
  where?: InputMaybe<PostCommentsBoolExp>;
};


export type QueryRootPostCommentsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostLikesArgs = {
  distinct_on?: InputMaybe<Array<PostLikesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikesOrderBy>>;
  where?: InputMaybe<PostLikesBoolExp>;
};


export type QueryRootPostLikesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostLikesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikesOrderBy>>;
  where?: InputMaybe<PostLikesBoolExp>;
};


export type QueryRootPostLikesByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostTagRecommendArgs = {
  distinct_on?: InputMaybe<Array<PostTagRecommendSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTagRecommendOrderBy>>;
  where?: InputMaybe<PostTagRecommendBoolExp>;
};


export type QueryRootPostTagRecommendAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostTagRecommendSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTagRecommendOrderBy>>;
  where?: InputMaybe<PostTagRecommendBoolExp>;
};


export type QueryRootPostTagRecommendByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostTagSizeArgs = {
  distinct_on?: InputMaybe<Array<PostTagSizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTagSizeOrderBy>>;
  where?: InputMaybe<PostTagSizeBoolExp>;
};


export type QueryRootPostTagSizeAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostTagSizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTagSizeOrderBy>>;
  where?: InputMaybe<PostTagSizeBoolExp>;
};


export type QueryRootPostTagSizeByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootPostsArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type QueryRootPostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type QueryRootPostsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};


export type QueryRootRelationshipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};


export type QueryRootRelationshipsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "relationships" */
export type Relationships = {
  __typename?: 'relationships';
  follow_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  following?: Maybe<Followings>;
  id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "relationships" */
export type RelationshipsAggregate = {
  __typename?: 'relationships_aggregate';
  aggregate?: Maybe<RelationshipsAggregateFields>;
  nodes: Array<Relationships>;
};

/** aggregate fields of "relationships" */
export type RelationshipsAggregateFields = {
  __typename?: 'relationships_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<RelationshipsMaxFields>;
  min?: Maybe<RelationshipsMinFields>;
};


/** aggregate fields of "relationships" */
export type RelationshipsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RelationshipsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "relationships" */
export type RelationshipsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RelationshipsMaxOrderBy>;
  min?: InputMaybe<RelationshipsMinOrderBy>;
};

/** input type for inserting array relation for remote table "relationships" */
export type RelationshipsArrRelInsertInput = {
  data: Array<RelationshipsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<RelationshipsOnConflict>;
};

/** Boolean expression to filter rows from the table "relationships". All fields are combined with a logical 'AND'. */
export type RelationshipsBoolExp = {
  _and?: InputMaybe<Array<RelationshipsBoolExp>>;
  _not?: InputMaybe<RelationshipsBoolExp>;
  _or?: InputMaybe<Array<RelationshipsBoolExp>>;
  follow_id?: InputMaybe<UuidComparisonExp>;
  following?: InputMaybe<FollowingsBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "relationships" */
export enum RelationshipsConstraint {
  /** unique or primary key constraint */
  RELATIONSHIPS_PKEY = 'relationships_pkey'
}

/** input type for inserting data into table "relationships" */
export type RelationshipsInsertInput = {
  follow_id?: InputMaybe<Scalars['uuid']>;
  following?: InputMaybe<FollowingsObjRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type RelationshipsMaxFields = {
  __typename?: 'relationships_max_fields';
  follow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "relationships" */
export type RelationshipsMaxOrderBy = {
  follow_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RelationshipsMinFields = {
  __typename?: 'relationships_min_fields';
  follow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "relationships" */
export type RelationshipsMinOrderBy = {
  follow_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "relationships" */
export type RelationshipsMutationResponse = {
  __typename?: 'relationships_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Relationships>;
};

/** on_conflict condition type for table "relationships" */
export type RelationshipsOnConflict = {
  constraint: RelationshipsConstraint;
  update_columns?: Array<RelationshipsUpdateColumn>;
  where?: InputMaybe<RelationshipsBoolExp>;
};

/** Ordering options when selecting data from "relationships". */
export type RelationshipsOrderBy = {
  follow_id?: InputMaybe<OrderBy>;
  following?: InputMaybe<FollowingsOrderBy>;
  id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: relationships */
export type RelationshipsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "relationships" */
export enum RelationshipsSelectColumn {
  /** column name */
  FOLLOW_ID = 'follow_id',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "relationships" */
export type RelationshipsSetInput = {
  follow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "relationships" */
export enum RelationshipsUpdateColumn {
  /** column name */
  FOLLOW_ID = 'follow_id',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id'
}

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "followings" */
  followings: Array<Followings>;
  /** fetch aggregated fields from the table: "followings" */
  followings_aggregate: FollowingsAggregate;
  /** fetch data from the table: "followings" using primary key columns */
  followings_by_pk?: Maybe<Followings>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: NotificationAggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** An array relationship */
  post_comments: Array<PostComments>;
  /** An aggregate relationship */
  post_comments_aggregate: PostCommentsAggregate;
  /** fetch data from the table: "post_comments" using primary key columns */
  post_comments_by_pk?: Maybe<PostComments>;
  /** An array relationship */
  post_likes: Array<PostLikes>;
  /** An aggregate relationship */
  post_likes_aggregate: PostLikesAggregate;
  /** fetch data from the table: "post_likes" using primary key columns */
  post_likes_by_pk?: Maybe<PostLikes>;
  /** fetch data from the table: "post_tag_recommend" */
  post_tag_recommend: Array<PostTagRecommend>;
  /** fetch aggregated fields from the table: "post_tag_recommend" */
  post_tag_recommend_aggregate: PostTagRecommendAggregate;
  /** fetch data from the table: "post_tag_recommend" using primary key columns */
  post_tag_recommend_by_pk?: Maybe<PostTagRecommend>;
  /** fetch data from the table: "post_tag_size" */
  post_tag_size: Array<PostTagSize>;
  /** fetch aggregated fields from the table: "post_tag_size" */
  post_tag_size_aggregate: PostTagSizeAggregate;
  /** fetch data from the table: "post_tag_size" using primary key columns */
  post_tag_size_by_pk?: Maybe<PostTagSize>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** An array relationship */
  relationships: Array<Relationships>;
  /** An aggregate relationship */
  relationships_aggregate: RelationshipsAggregate;
  /** fetch data from the table: "relationships" using primary key columns */
  relationships_by_pk?: Maybe<Relationships>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type SubscriptionRootFollowingsArgs = {
  distinct_on?: InputMaybe<Array<FollowingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FollowingsOrderBy>>;
  where?: InputMaybe<FollowingsBoolExp>;
};


export type SubscriptionRootFollowingsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FollowingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FollowingsOrderBy>>;
  where?: InputMaybe<FollowingsBoolExp>;
};


export type SubscriptionRootFollowingsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootNotificationArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};


export type SubscriptionRootNotificationAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};


export type SubscriptionRootNotificationByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPostCommentsArgs = {
  distinct_on?: InputMaybe<Array<PostCommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostCommentsOrderBy>>;
  where?: InputMaybe<PostCommentsBoolExp>;
};


export type SubscriptionRootPostCommentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostCommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostCommentsOrderBy>>;
  where?: InputMaybe<PostCommentsBoolExp>;
};


export type SubscriptionRootPostCommentsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPostLikesArgs = {
  distinct_on?: InputMaybe<Array<PostLikesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikesOrderBy>>;
  where?: InputMaybe<PostLikesBoolExp>;
};


export type SubscriptionRootPostLikesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostLikesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikesOrderBy>>;
  where?: InputMaybe<PostLikesBoolExp>;
};


export type SubscriptionRootPostLikesByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPostTagRecommendArgs = {
  distinct_on?: InputMaybe<Array<PostTagRecommendSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTagRecommendOrderBy>>;
  where?: InputMaybe<PostTagRecommendBoolExp>;
};


export type SubscriptionRootPostTagRecommendAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostTagRecommendSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTagRecommendOrderBy>>;
  where?: InputMaybe<PostTagRecommendBoolExp>;
};


export type SubscriptionRootPostTagRecommendByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPostTagSizeArgs = {
  distinct_on?: InputMaybe<Array<PostTagSizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTagSizeOrderBy>>;
  where?: InputMaybe<PostTagSizeBoolExp>;
};


export type SubscriptionRootPostTagSizeAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostTagSizeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostTagSizeOrderBy>>;
  where?: InputMaybe<PostTagSizeBoolExp>;
};


export type SubscriptionRootPostTagSizeByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootPostsArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type SubscriptionRootPostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type SubscriptionRootPostsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};


export type SubscriptionRootRelationshipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};


export type SubscriptionRootRelationshipsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  display_id: Scalars['String'];
  email: Scalars['String'];
  /** An object relationship */
  following?: Maybe<Followings>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isDarkMode?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  /** An array relationship */
  notifications: Array<Notification>;
  /** An aggregate relationship */
  notifications_aggregate: NotificationAggregate;
  /** An array relationship */
  post_comments: Array<PostComments>;
  /** An aggregate relationship */
  post_comments_aggregate: PostCommentsAggregate;
  /** An array relationship */
  post_likes: Array<PostLikes>;
  /** An aggregate relationship */
  post_likes_aggregate: PostLikesAggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: PostsAggregate;
  profile?: Maybe<Scalars['String']>;
  /** An array relationship */
  relationships: Array<Relationships>;
  /** An aggregate relationship */
  relationships_aggregate: RelationshipsAggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersNotificationsArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};


/** columns and relationships of "users" */
export type UsersNotificationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<NotificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<NotificationOrderBy>>;
  where?: InputMaybe<NotificationBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostCommentsArgs = {
  distinct_on?: InputMaybe<Array<PostCommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostCommentsOrderBy>>;
  where?: InputMaybe<PostCommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostCommentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostCommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostCommentsOrderBy>>;
  where?: InputMaybe<PostCommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostLikesArgs = {
  distinct_on?: InputMaybe<Array<PostLikesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikesOrderBy>>;
  where?: InputMaybe<PostLikesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostLikesAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostLikesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostLikesOrderBy>>;
  where?: InputMaybe<PostLikesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersRelationshipsArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersRelationshipsAggregateArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  display_id?: InputMaybe<StringComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  following?: InputMaybe<FollowingsBoolExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  imageUrl?: InputMaybe<StringComparisonExp>;
  isDarkMode?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  notifications?: InputMaybe<NotificationBoolExp>;
  post_comments?: InputMaybe<PostCommentsBoolExp>;
  post_likes?: InputMaybe<PostLikesBoolExp>;
  posts?: InputMaybe<PostsBoolExp>;
  profile?: InputMaybe<StringComparisonExp>;
  relationships?: InputMaybe<RelationshipsBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  USERS_PKEY = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  following?: InputMaybe<FollowingsObjRelInsertInput>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isDarkMode?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationArrRelInsertInput>;
  post_comments?: InputMaybe<PostCommentsArrRelInsertInput>;
  post_likes?: InputMaybe<PostLikesArrRelInsertInput>;
  posts?: InputMaybe<PostsArrRelInsertInput>;
  profile?: InputMaybe<Scalars['String']>;
  relationships?: InputMaybe<RelationshipsArrRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  display_id?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  following?: InputMaybe<FollowingsOrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  imageUrl?: InputMaybe<OrderBy>;
  isDarkMode?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  notifications_aggregate?: InputMaybe<NotificationAggregateOrderBy>;
  post_comments_aggregate?: InputMaybe<PostCommentsAggregateOrderBy>;
  post_likes_aggregate?: InputMaybe<PostLikesAggregateOrderBy>;
  posts_aggregate?: InputMaybe<PostsAggregateOrderBy>;
  profile?: InputMaybe<OrderBy>;
  relationships_aggregate?: InputMaybe<RelationshipsAggregateOrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DISPLAY_ID = 'display_id',
  /** column name */
  EMAIL = 'email',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  IMAGEURL = 'imageUrl',
  /** column name */
  ISDARKMODE = 'isDarkMode',
  /** column name */
  NAME = 'name',
  /** column name */
  PROFILE = 'profile',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isDarkMode?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DISPLAY_ID = 'display_id',
  /** column name */
  EMAIL = 'email',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  IMAGEURL = 'imageUrl',
  /** column name */
  ISDARKMODE = 'isDarkMode',
  /** column name */
  NAME = 'name',
  /** column name */
  PROFILE = 'profile',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type CreateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  display_id: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'display_id' | 'email' | 'name' | 'image' | 'created_at'>
  )> }
);


export const CreateUserDocument = gql`
    mutation createUser($id: uuid!, $display_id: String!, $email: String!, $name: String!, $image: String) {
  insert_users_one(
    object: {id: $id, display_id: $display_id, name: $name, email: $email, image: $image}
  ) {
    id
    display_id
    email
    name
    image
    created_at
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      display_id: // value for 'display_id'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;