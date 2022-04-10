import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
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
  timestamptz: string;
  uuid: string;
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

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
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
  id: Scalars['String'];
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
  user_id: Scalars['String'];
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
  user_id?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "notification" */
export enum NotificationConstraint {
  /** unique or primary key constraint */
  NOTIFICATION_PKEY = 'notification_pkey',
}

/** input type for inserting data into table "notification" */
export type NotificationInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type NotificationMaxFields = {
  __typename?: 'notification_max_fields';
  id?: Maybe<Scalars['uuid']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
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
  user_id?: Maybe<Scalars['String']>;
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
  USER_ID = 'user_id',
}

/** input type for updating data in table "notification" */
export type NotificationSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
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
  USER_ID = 'user_id',
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
  DESC_NULLS_LAST = 'desc_nulls_last',
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
  user_id: Scalars['String'];
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
  user_id?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "post_comments" */
export enum PostCommentsConstraint {
  /** unique or primary key constraint */
  POST_COMMENTS_PKEY = 'post_comments_pkey',
}

/** input type for inserting data into table "post_comments" */
export type PostCommentsInsertInput = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostCommentsMaxFields = {
  __typename?: 'post_comments_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
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
  user_id?: Maybe<Scalars['String']>;
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
  USER_ID = 'user_id',
}

/** input type for updating data in table "post_comments" */
export type PostCommentsSetInput = {
  comment?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['String']>;
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
  USER_ID = 'user_id',
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
  user_id: Scalars['String'];
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
  user_id?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "post_likes" */
export enum PostLikesConstraint {
  /** unique or primary key constraint */
  POST_LIKES_PKEY = 'post_likes_pkey',
}

/** input type for inserting data into table "post_likes" */
export type PostLikesInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  post_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostLikesMaxFields = {
  __typename?: 'post_likes_max_fields';
  id?: Maybe<Scalars['uuid']>;
  post_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
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
  user_id?: Maybe<Scalars['String']>;
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
  USER_ID = 'user_id',
}

/** input type for updating data in table "post_likes" */
export type PostLikesSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  post_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "post_likes" */
export enum PostLikesUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POST_ID = 'post_id',
  /** column name */
  USER_ID = 'user_id',
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
  POST_TAG_RECOMMEND_POST_ID_KEY = 'post_tag_recommend_post_id_key',
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
  RECOMMEND = 'recommend',
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
  RECOMMEND = 'recommend',
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
  POST_TAG_SIZE_POST_ID_KEY = 'post_tag_size_post_id_key',
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
  SIZE = 'size',
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
  SIZE = 'size',
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  petGender: Scalars['String'];
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
  user_id: Scalars['String'];
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
  petGender?: InputMaybe<StringComparisonExp>;
  petName?: InputMaybe<StringComparisonExp>;
  post_comments?: InputMaybe<PostCommentsBoolExp>;
  post_likes?: InputMaybe<PostLikesBoolExp>;
  post_tag_recommend?: InputMaybe<PostTagRecommendBoolExp>;
  post_tag_size?: InputMaybe<PostTagSizeBoolExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export enum PostsConstraint {
  /** unique or primary key constraint */
  POSTS_PKEY = 'posts_pkey',
}

/** input type for inserting data into table "posts" */
export type PostsInsertInput = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  petGender?: InputMaybe<Scalars['String']>;
  petName?: InputMaybe<Scalars['String']>;
  post_comments?: InputMaybe<PostCommentsArrRelInsertInput>;
  post_likes?: InputMaybe<PostLikesArrRelInsertInput>;
  post_tag_recommend?: InputMaybe<PostTagRecommendObjRelInsertInput>;
  post_tag_size?: InputMaybe<PostTagSizeObjRelInsertInput>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type PostsMaxFields = {
  __typename?: 'posts_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  petGender?: Maybe<Scalars['String']>;
  petName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  imageUrl?: InputMaybe<OrderBy>;
  petGender?: InputMaybe<OrderBy>;
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
  petGender?: Maybe<Scalars['String']>;
  petName?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  content?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  imageUrl?: InputMaybe<OrderBy>;
  petGender?: InputMaybe<OrderBy>;
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
  petGender?: InputMaybe<OrderBy>;
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
  PETGENDER = 'petGender',
  /** column name */
  PETNAME = 'petName',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id',
}

/** input type for updating data in table "posts" */
export type PostsSetInput = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  petGender?: InputMaybe<Scalars['String']>;
  petName?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['String']>;
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
  PETGENDER = 'petGender',
  /** column name */
  PETNAME = 'petName',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id',
}

export type QueryRoot = {
  __typename?: 'query_root';
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
  /** fetch data from the table: "relationships" */
  relationships: Array<Relationships>;
  /** fetch aggregated fields from the table: "relationships" */
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
  id: Scalars['String'];
};

/** columns and relationships of "relationships" */
export type Relationships = {
  __typename?: 'relationships';
  /** An object relationship */
  follow?: Maybe<Users>;
  follow_id?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['String']>;
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
  follow?: InputMaybe<UsersBoolExp>;
  follow_id?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "relationships" */
export enum RelationshipsConstraint {
  /** unique or primary key constraint */
  RELATIONSHIPS_PKEY = 'relationships_pkey',
}

/** input type for inserting data into table "relationships" */
export type RelationshipsInsertInput = {
  follow?: InputMaybe<UsersObjRelInsertInput>;
  follow_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RelationshipsMaxFields = {
  __typename?: 'relationships_max_fields';
  follow_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
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
  follow_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
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
  follow?: InputMaybe<UsersOrderBy>;
  follow_id?: InputMaybe<OrderBy>;
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
  USER_ID = 'user_id',
}

/** input type for updating data in table "relationships" */
export type RelationshipsSetInput = {
  follow_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "relationships" */
export enum RelationshipsUpdateColumn {
  /** column name */
  FOLLOW_ID = 'follow_id',
  /** column name */
  ID = 'id',
  /** column name */
  USER_ID = 'user_id',
}

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
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
  /** fetch data from the table: "relationships" */
  relationships: Array<Relationships>;
  /** fetch aggregated fields from the table: "relationships" */
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
  id: Scalars['String'];
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
  email?: Maybe<Scalars['String']>;
  /** An array relationship */
  followed: Array<Relationships>;
  /** An aggregate relationship */
  followed_aggregate: RelationshipsAggregate;
  /** An array relationship */
  following: Array<Relationships>;
  /** An aggregate relationship */
  following_aggregate: RelationshipsAggregate;
  id: Scalars['String'];
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
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "users" */
export type UsersFollowedArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersFollowedAggregateArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersFollowingArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
};

/** columns and relationships of "users" */
export type UsersFollowingAggregateArgs = {
  distinct_on?: InputMaybe<Array<RelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RelationshipsOrderBy>>;
  where?: InputMaybe<RelationshipsBoolExp>;
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
  followed?: InputMaybe<RelationshipsBoolExp>;
  following?: InputMaybe<RelationshipsBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  imageUrl?: InputMaybe<StringComparisonExp>;
  isDarkMode?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  notifications?: InputMaybe<NotificationBoolExp>;
  post_comments?: InputMaybe<PostCommentsBoolExp>;
  post_likes?: InputMaybe<PostLikesBoolExp>;
  posts?: InputMaybe<PostsBoolExp>;
  profile?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  USERS_PKEY = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  followed?: InputMaybe<RelationshipsArrRelInsertInput>;
  following?: InputMaybe<RelationshipsArrRelInsertInput>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  isDarkMode?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  notifications?: InputMaybe<NotificationArrRelInsertInput>;
  post_comments?: InputMaybe<PostCommentsArrRelInsertInput>;
  post_likes?: InputMaybe<PostLikesArrRelInsertInput>;
  posts?: InputMaybe<PostsArrRelInsertInput>;
  profile?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
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
  followed_aggregate?: InputMaybe<RelationshipsAggregateOrderBy>;
  following_aggregate?: InputMaybe<RelationshipsAggregateOrderBy>;
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
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['String'];
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
  UPDATED_AT = 'updated_at',
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  display_id?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
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
  UPDATED_AT = 'updated_at',
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
  id: Scalars['String'];
  display_id: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
}>;

export type CreateUserMutation = { __typename?: 'mutation_root' } & {
  insert_users_one?: Maybe<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'email' | 'name' | 'image' | 'created_at'>
  >;
};

export type ReactiveVarGetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type ReactiveVarGetUserQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'email' | 'image' | 'created_at'>
  >;
};

export type GetAllPostQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;

export type GetAllPostQuery = { __typename?: 'query_root' } & {
  posts: Array<
    { __typename?: 'posts' } & Pick<Posts, 'id' | 'image' | 'content' | 'created_at'> & {
        user: { __typename?: 'users' } & Pick<Users, 'id' | 'image' | 'name'> & {
            post_comments_aggregate: { __typename?: 'post_comments_aggregate' } & {
              aggregate?: Maybe<
                { __typename?: 'post_comments_aggregate_fields' } & Pick<PostCommentsAggregateFields, 'count'>
              >;
            };
            post_likes_aggregate: { __typename?: 'post_likes_aggregate' } & {
              aggregate?: Maybe<
                { __typename?: 'post_likes_aggregate_fields' } & Pick<PostLikesAggregateFields, 'count'>
              >;
            };
          };
      }
  >;
};

export type GetAllUsersWithPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersWithPostsQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id'> & {
        posts: Array<{ __typename?: 'posts' } & Pick<Posts, 'id'>>;
      }
  >;
};

export type GetOneUserWithPostQueryVariables = Exact<{
  userId: Scalars['String'];
  postId: Scalars['uuid'];
}>;

export type GetOneUserWithPostQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'image'> & {
        posts: Array<
          { __typename?: 'posts' } & Pick<
            Posts,
            'id' | 'image' | 'imageUrl' | 'petName' | 'petGender' | 'content' | 'created_at'
          > & {
              post_tag_size?: Maybe<{ __typename?: 'post_tag_size' } & Pick<PostTagSize, 'id' | 'size'>>;
              post_tag_recommend?: Maybe<
                { __typename?: 'post_tag_recommend' } & Pick<PostTagRecommend, 'id' | 'recommend'>
              >;
              post_comments: Array<
                { __typename?: 'post_comments' } & Pick<PostComments, 'id' | 'comment' | 'created_at'> & {
                    user: { __typename?: 'users' } & Pick<Users, 'image' | 'name' | 'display_id'>;
                  }
              >;
            }
        >;
      }
  >;
};

export type GetPostLikeCountQueryVariables = Exact<{
  postId: Scalars['uuid'];
}>;

export type GetPostLikeCountQuery = { __typename?: 'query_root' } & {
  post_likes: Array<{ __typename?: 'post_likes' } & Pick<PostLikes, 'id' | 'post_id' | 'user_id'>>;
};

export type AddPostLikeMutationVariables = Exact<{
  userId: Scalars['String'];
  postId: Scalars['uuid'];
}>;

export type AddPostLikeMutation = { __typename?: 'mutation_root' } & {
  insert_post_likes_one?: Maybe<{ __typename?: 'post_likes' } & Pick<PostLikes, 'id' | 'user_id' | 'post_id'>>;
};

export type RemovePostLikeMutationVariables = Exact<{
  userId: Scalars['String'];
  postId: Scalars['uuid'];
}>;

export type RemovePostLikeMutation = { __typename?: 'mutation_root' } & {
  delete_post_likes?: Maybe<
    { __typename?: 'post_likes_mutation_response' } & Pick<PostLikesMutationResponse, 'affected_rows'>
  >;
};

export type AddPostCommentMutationVariables = Exact<{
  userId: Scalars['String'];
  postId: Scalars['uuid'];
  comment: Scalars['String'];
}>;

export type AddPostCommentMutation = { __typename?: 'mutation_root' } & {
  insert_post_comments_one?: Maybe<
    { __typename?: 'post_comments' } & Pick<PostComments, 'id' | 'comment' | 'created_at'> & {
        user: { __typename?: 'users' } & Pick<Users, 'image' | 'name' | 'display_id'>;
      }
  >;
};

export type SubscriptionPostCommentSubscriptionVariables = Exact<{
  postId: Scalars['uuid'];
}>;

export type SubscriptionPostCommentSubscription = { __typename?: 'subscription_root' } & {
  post_comments: Array<
    { __typename?: 'post_comments' } & Pick<PostComments, 'id' | 'comment' | 'created_at'> & {
        user: { __typename?: 'users' } & Pick<Users, 'image' | 'name' | 'display_id'>;
      }
  >;
};

export type InsertPostOneMutationVariables = Exact<{
  user_id: Scalars['String'];
  content: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  petName: Scalars['String'];
  petGender: Scalars['String'];
  post_tag_size: Scalars['String'];
  post_tag_recommend: Scalars['String'];
}>;

export type InsertPostOneMutation = { __typename?: 'mutation_root' } & {
  insert_posts_one?: Maybe<
    { __typename?: 'posts' } & Pick<
      Posts,
      'id' | 'user_id' | 'content' | 'image' | 'imageUrl' | 'petName' | 'petGender' | 'created_at'
    >
  >;
};

export type EditPostOneMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_id: Scalars['String'];
  content: Scalars['String'];
  image: Scalars['String'];
  imageUrl: Scalars['String'];
  petName: Scalars['String'];
  petGender: Scalars['String'];
}>;

export type EditPostOneMutation = { __typename?: 'mutation_root' } & {
  insert_posts_one?: Maybe<
    { __typename?: 'posts' } & Pick<
      Posts,
      'id' | 'user_id' | 'content' | 'image' | 'imageUrl' | 'petName' | 'petGender' | 'created_at'
    >
  >;
};

export type EditPostOneWithoutImageMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_id: Scalars['String'];
  content: Scalars['String'];
  petName: Scalars['String'];
  petGender: Scalars['String'];
}>;

export type EditPostOneWithoutImageMutation = { __typename?: 'mutation_root' } & {
  insert_posts_one?: Maybe<
    { __typename?: 'posts' } & Pick<
      Posts,
      'id' | 'user_id' | 'content' | 'image' | 'imageUrl' | 'petName' | 'petGender' | 'created_at'
    >
  >;
};

export type DelatePostOneMutationVariables = Exact<{
  postId: Scalars['uuid'];
}>;

export type DelatePostOneMutation = { __typename?: 'mutation_root' } & {
  delete_posts_by_pk?: Maybe<{ __typename?: 'posts' } & Pick<Posts, 'id' | 'image' | 'imageUrl' | 'user_id'>>;
};

export type UpdateUserProfileMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  displayId: Scalars['String'];
  profile?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
}>;

export type UpdateUserProfileMutation = { __typename?: 'mutation_root' } & {
  insert_users_one?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'display_id' | 'profile' | 'image'>>;
};

export type GetUserInfomationQueryVariables = Exact<{
  display_id: Scalars['String'];
}>;

export type GetUserInfomationQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & {
      posts_aggregate: { __typename?: 'posts_aggregate' } & {
        aggregate?: Maybe<{ __typename?: 'posts_aggregate_fields' } & Pick<PostsAggregateFields, 'count'>>;
      };
      following_aggregate: { __typename?: 'relationships_aggregate' } & {
        aggregate?: Maybe<
          { __typename?: 'relationships_aggregate_fields' } & Pick<RelationshipsAggregateFields, 'count'>
        >;
      };
      followed_aggregate: { __typename?: 'relationships_aggregate' } & {
        aggregate?: Maybe<
          { __typename?: 'relationships_aggregate_fields' } & Pick<RelationshipsAggregateFields, 'count'>
        >;
      };
    }
  >;
};

export type GetOneUserAllPostQueryVariables = Exact<{
  display_id: Scalars['String'];
}>;

export type GetOneUserAllPostQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'image' | 'created_at'> & {
        posts: Array<
          { __typename?: 'posts' } & Pick<Posts, 'id' | 'image' | 'content' | 'updated_at'> & {
              post_comments_aggregate: { __typename?: 'post_comments_aggregate' } & {
                aggregate?: Maybe<
                  { __typename?: 'post_comments_aggregate_fields' } & Pick<PostCommentsAggregateFields, 'count'>
                >;
              };
              post_likes_aggregate: { __typename?: 'post_likes_aggregate' } & {
                aggregate?: Maybe<
                  { __typename?: 'post_likes_aggregate_fields' } & Pick<PostLikesAggregateFields, 'count'>
                >;
              };
            }
        >;
      }
  >;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Users, 'id' | 'display_id'>>;
};

export type GetOneUserLikePostQueryVariables = Exact<{
  display_id: Scalars['String'];
}>;

export type GetOneUserLikePostQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'image' | 'created_at'> & {
        post_likes: Array<
          { __typename?: 'post_likes' } & {
            post: { __typename?: 'posts' } & Pick<Posts, 'id' | 'content' | 'image' | 'updated_at'> & {
                user: { __typename?: 'users' } & Pick<Users, 'id' | 'image' | 'name' | 'created_at'> & {
                    post_comments_aggregate: { __typename?: 'post_comments_aggregate' } & {
                      aggregate?: Maybe<
                        { __typename?: 'post_comments_aggregate_fields' } & Pick<PostCommentsAggregateFields, 'count'>
                      >;
                    };
                    post_likes_aggregate: { __typename?: 'post_likes_aggregate' } & {
                      aggregate?: Maybe<
                        { __typename?: 'post_likes_aggregate_fields' } & Pick<PostLikesAggregateFields, 'count'>
                      >;
                    };
                  };
              };
          }
        >;
      }
  >;
};

export type GetFollowUserPostQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;

export type GetFollowUserPostQuery = { __typename?: 'query_root' } & {
  posts: Array<
    { __typename?: 'posts' } & Pick<
      Posts,
      'id' | 'user_id' | 'image' | 'content' | 'petName' | 'petGender' | 'created_at'
    > & {
        user: { __typename?: 'users' } & Pick<Users, 'id' | 'image' | 'name' | 'created_at'> & {
            post_comments_aggregate: { __typename?: 'post_comments_aggregate' } & {
              aggregate?: Maybe<
                { __typename?: 'post_comments_aggregate_fields' } & Pick<PostCommentsAggregateFields, 'count'>
              >;
            };
            post_likes_aggregate: { __typename?: 'post_likes_aggregate' } & {
              aggregate?: Maybe<
                { __typename?: 'post_likes_aggregate_fields' } & Pick<PostLikesAggregateFields, 'count'>
              >;
            };
          };
      }
  >;
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'image' | 'created_at'>
  >;
};

export type GetOneUserFollowingQueryVariables = Exact<{
  display_id: Scalars['String'];
}>;

export type GetOneUserFollowingQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'image' | 'created_at'> & {
        following: Array<
          { __typename?: 'relationships' } & {
            follow?: Maybe<
              { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'image' | 'created_at'>
            >;
          }
        >;
      }
  >;
};

export type GetOneUserFollowerQueryVariables = Exact<{
  display_id: Scalars['String'];
}>;

export type GetOneUserFollowerQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'image' | 'created_at'> & {
        followed: Array<
          { __typename?: 'relationships' } & {
            user?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'image' | 'created_at'>>;
          }
        >;
      }
  >;
};

export type IsFollowUserQueryVariables = Exact<{
  fromUserId: Scalars['String'];
  toUserId: Scalars['String'];
}>;

export type IsFollowUserQuery = { __typename?: 'query_root' } & {
  relationships: Array<{ __typename?: 'relationships' } & Pick<Relationships, 'id' | 'user_id' | 'follow_id'>>;
};

export type AddFollowMutationVariables = Exact<{
  fromUserId: Scalars['String'];
  toUserId: Scalars['String'];
}>;

export type AddFollowMutation = { __typename?: 'mutation_root' } & {
  insert_relationships_one?: Maybe<
    { __typename?: 'relationships' } & Pick<Relationships, 'id' | 'user_id' | 'follow_id'>
  >;
};

export type RemoveFollowMutationVariables = Exact<{
  fromUserId: Scalars['String'];
  toUserId: Scalars['String'];
}>;

export type RemoveFollowMutation = { __typename?: 'mutation_root' } & {
  delete_relationships?: Maybe<
    { __typename?: 'relationships_mutation_response' } & Pick<RelationshipsMutationResponse, 'affected_rows'>
  >;
};

export type GetSearchResultQueryVariables = Exact<{
  word: Scalars['String'];
}>;

export type GetSearchResultQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'name' | 'profile' | 'image' | 'created_at'>
  >;
  posts: Array<
    { __typename?: 'posts' } & Pick<
      Posts,
      'id' | 'user_id' | 'image' | 'content' | 'petName' | 'petGender' | 'created_at'
    > & {
        user: { __typename?: 'users' } & Pick<Users, 'id' | 'display_id' | 'image' | 'name'>;
        post_comments_aggregate: { __typename?: 'post_comments_aggregate' } & {
          aggregate?: Maybe<
            { __typename?: 'post_comments_aggregate_fields' } & Pick<PostCommentsAggregateFields, 'count'>
          >;
        };
        post_likes_aggregate: { __typename?: 'post_likes_aggregate' } & {
          aggregate?: Maybe<{ __typename?: 'post_likes_aggregate_fields' } & Pick<PostLikesAggregateFields, 'count'>>;
        };
      }
  >;
};

export const CreateUserDocument = gql`
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
export function useCreateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const ReactiveVarGetUserDocument = gql`
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

/**
 * __useReactiveVarGetUserQuery__
 *
 * To run a query within a React component, call `useReactiveVarGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useReactiveVarGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReactiveVarGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReactiveVarGetUserQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>(
    ReactiveVarGetUserDocument,
    options,
  );
}
export function useReactiveVarGetUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<ReactiveVarGetUserQuery, ReactiveVarGetUserQueryVariables>(
    ReactiveVarGetUserDocument,
    options,
  );
}
export type ReactiveVarGetUserQueryHookResult = ReturnType<typeof useReactiveVarGetUserQuery>;
export type ReactiveVarGetUserLazyQueryHookResult = ReturnType<typeof useReactiveVarGetUserLazyQuery>;
export type ReactiveVarGetUserQueryResult = ApolloReactCommon.QueryResult<
  ReactiveVarGetUserQuery,
  ReactiveVarGetUserQueryVariables
>;
export const GetAllPostDocument = gql`
  query GetAllPost($limit: Int!, $offset: Int!) {
    posts(limit: $limit, order_by: { id: asc }, offset: $offset) {
      id
      image
      content
      created_at
      user {
        id
        image
        name
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

/**
 * __useGetAllPostQuery__
 *
 * To run a query within a React component, call `useGetAllPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetAllPostQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetAllPostQuery, GetAllPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetAllPostQuery, GetAllPostQueryVariables>(GetAllPostDocument, options);
}
export function useGetAllPostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllPostQuery, GetAllPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetAllPostQuery, GetAllPostQueryVariables>(GetAllPostDocument, options);
}
export type GetAllPostQueryHookResult = ReturnType<typeof useGetAllPostQuery>;
export type GetAllPostLazyQueryHookResult = ReturnType<typeof useGetAllPostLazyQuery>;
export type GetAllPostQueryResult = ApolloReactCommon.QueryResult<GetAllPostQuery, GetAllPostQueryVariables>;
export const GetAllUsersWithPostsDocument = gql`
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

/**
 * __useGetAllUsersWithPostsQuery__
 *
 * To run a query within a React component, call `useGetAllUsersWithPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersWithPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersWithPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersWithPostsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>(
    GetAllUsersWithPostsDocument,
    options,
  );
}
export function useGetAllUsersWithPostsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetAllUsersWithPostsQuery, GetAllUsersWithPostsQueryVariables>(
    GetAllUsersWithPostsDocument,
    options,
  );
}
export type GetAllUsersWithPostsQueryHookResult = ReturnType<typeof useGetAllUsersWithPostsQuery>;
export type GetAllUsersWithPostsLazyQueryHookResult = ReturnType<typeof useGetAllUsersWithPostsLazyQuery>;
export type GetAllUsersWithPostsQueryResult = ApolloReactCommon.QueryResult<
  GetAllUsersWithPostsQuery,
  GetAllUsersWithPostsQueryVariables
>;
export const GetOneUserWithPostDocument = gql`
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

/**
 * __useGetOneUserWithPostQuery__
 *
 * To run a query within a React component, call `useGetOneUserWithPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserWithPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserWithPostQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetOneUserWithPostQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>(
    GetOneUserWithPostDocument,
    options,
  );
}
export function useGetOneUserWithPostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetOneUserWithPostQuery, GetOneUserWithPostQueryVariables>(
    GetOneUserWithPostDocument,
    options,
  );
}
export type GetOneUserWithPostQueryHookResult = ReturnType<typeof useGetOneUserWithPostQuery>;
export type GetOneUserWithPostLazyQueryHookResult = ReturnType<typeof useGetOneUserWithPostLazyQuery>;
export type GetOneUserWithPostQueryResult = ApolloReactCommon.QueryResult<
  GetOneUserWithPostQuery,
  GetOneUserWithPostQueryVariables
>;
export const GetPostLikeCountDocument = gql`
  query GetPostLikeCount($postId: uuid!) {
    post_likes(where: { post_id: { _eq: $postId } }) {
      id
      post_id
      user_id
    }
  }
`;

/**
 * __useGetPostLikeCountQuery__
 *
 * To run a query within a React component, call `useGetPostLikeCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostLikeCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostLikeCountQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPostLikeCountQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetPostLikeCountQuery, GetPostLikeCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetPostLikeCountQuery, GetPostLikeCountQueryVariables>(
    GetPostLikeCountDocument,
    options,
  );
}
export function useGetPostLikeCountLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPostLikeCountQuery, GetPostLikeCountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetPostLikeCountQuery, GetPostLikeCountQueryVariables>(
    GetPostLikeCountDocument,
    options,
  );
}
export type GetPostLikeCountQueryHookResult = ReturnType<typeof useGetPostLikeCountQuery>;
export type GetPostLikeCountLazyQueryHookResult = ReturnType<typeof useGetPostLikeCountLazyQuery>;
export type GetPostLikeCountQueryResult = ApolloReactCommon.QueryResult<
  GetPostLikeCountQuery,
  GetPostLikeCountQueryVariables
>;
export const AddPostLikeDocument = gql`
  mutation AddPostLike($userId: String!, $postId: uuid!) {
    insert_post_likes_one(object: { user_id: $userId, post_id: $postId }) {
      id
      user_id
      post_id
    }
  }
`;
export type AddPostLikeMutationFn = ApolloReactCommon.MutationFunction<
  AddPostLikeMutation,
  AddPostLikeMutationVariables
>;

/**
 * __useAddPostLikeMutation__
 *
 * To run a mutation, you first call `useAddPostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostLikeMutation, { data, loading, error }] = useAddPostLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddPostLikeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddPostLikeMutation, AddPostLikeMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<AddPostLikeMutation, AddPostLikeMutationVariables>(AddPostLikeDocument, options);
}
export type AddPostLikeMutationHookResult = ReturnType<typeof useAddPostLikeMutation>;
export type AddPostLikeMutationResult = ApolloReactCommon.MutationResult<AddPostLikeMutation>;
export type AddPostLikeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddPostLikeMutation,
  AddPostLikeMutationVariables
>;
export const RemovePostLikeDocument = gql`
  mutation RemovePostLike($userId: String!, $postId: uuid!) {
    delete_post_likes(where: { _and: { user_id: { _eq: $userId }, post_id: { _eq: $postId } } }) {
      affected_rows
    }
  }
`;
export type RemovePostLikeMutationFn = ApolloReactCommon.MutationFunction<
  RemovePostLikeMutation,
  RemovePostLikeMutationVariables
>;

/**
 * __useRemovePostLikeMutation__
 *
 * To run a mutation, you first call `useRemovePostLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePostLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePostLikeMutation, { data, loading, error }] = useRemovePostLikeMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useRemovePostLikeMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RemovePostLikeMutation, RemovePostLikeMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<RemovePostLikeMutation, RemovePostLikeMutationVariables>(
    RemovePostLikeDocument,
    options,
  );
}
export type RemovePostLikeMutationHookResult = ReturnType<typeof useRemovePostLikeMutation>;
export type RemovePostLikeMutationResult = ApolloReactCommon.MutationResult<RemovePostLikeMutation>;
export type RemovePostLikeMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemovePostLikeMutation,
  RemovePostLikeMutationVariables
>;
export const AddPostCommentDocument = gql`
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
export type AddPostCommentMutationFn = ApolloReactCommon.MutationFunction<
  AddPostCommentMutation,
  AddPostCommentMutationVariables
>;

/**
 * __useAddPostCommentMutation__
 *
 * To run a mutation, you first call `useAddPostCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostCommentMutation, { data, loading, error }] = useAddPostCommentMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      postId: // value for 'postId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useAddPostCommentMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddPostCommentMutation, AddPostCommentMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<AddPostCommentMutation, AddPostCommentMutationVariables>(
    AddPostCommentDocument,
    options,
  );
}
export type AddPostCommentMutationHookResult = ReturnType<typeof useAddPostCommentMutation>;
export type AddPostCommentMutationResult = ApolloReactCommon.MutationResult<AddPostCommentMutation>;
export type AddPostCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddPostCommentMutation,
  AddPostCommentMutationVariables
>;
export const SubscriptionPostCommentDocument = gql`
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

/**
 * __useSubscriptionPostCommentSubscription__
 *
 * To run a query within a React component, call `useSubscriptionPostCommentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionPostCommentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionPostCommentSubscription({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useSubscriptionPostCommentSubscription(
  baseOptions: ApolloReactHooks.SubscriptionHookOptions<
    SubscriptionPostCommentSubscription,
    SubscriptionPostCommentSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useSubscription<
    SubscriptionPostCommentSubscription,
    SubscriptionPostCommentSubscriptionVariables
  >(SubscriptionPostCommentDocument, options);
}
export type SubscriptionPostCommentSubscriptionHookResult = ReturnType<typeof useSubscriptionPostCommentSubscription>;
export type SubscriptionPostCommentSubscriptionResult =
  ApolloReactCommon.SubscriptionResult<SubscriptionPostCommentSubscription>;
export const InsertPostOneDocument = gql`
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
export type InsertPostOneMutationFn = ApolloReactCommon.MutationFunction<
  InsertPostOneMutation,
  InsertPostOneMutationVariables
>;

/**
 * __useInsertPostOneMutation__
 *
 * To run a mutation, you first call `useInsertPostOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertPostOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertPostOneMutation, { data, loading, error }] = useInsertPostOneMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      content: // value for 'content'
 *      image: // value for 'image'
 *      imageUrl: // value for 'imageUrl'
 *      petName: // value for 'petName'
 *      petGender: // value for 'petGender'
 *      post_tag_size: // value for 'post_tag_size'
 *      post_tag_recommend: // value for 'post_tag_recommend'
 *   },
 * });
 */
export function useInsertPostOneMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<InsertPostOneMutation, InsertPostOneMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<InsertPostOneMutation, InsertPostOneMutationVariables>(
    InsertPostOneDocument,
    options,
  );
}
export type InsertPostOneMutationHookResult = ReturnType<typeof useInsertPostOneMutation>;
export type InsertPostOneMutationResult = ApolloReactCommon.MutationResult<InsertPostOneMutation>;
export type InsertPostOneMutationOptions = ApolloReactCommon.BaseMutationOptions<
  InsertPostOneMutation,
  InsertPostOneMutationVariables
>;
export const EditPostOneDocument = gql`
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
export type EditPostOneMutationFn = ApolloReactCommon.MutationFunction<
  EditPostOneMutation,
  EditPostOneMutationVariables
>;

/**
 * __useEditPostOneMutation__
 *
 * To run a mutation, you first call `useEditPostOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostOneMutation, { data, loading, error }] = useEditPostOneMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      content: // value for 'content'
 *      image: // value for 'image'
 *      imageUrl: // value for 'imageUrl'
 *      petName: // value for 'petName'
 *      petGender: // value for 'petGender'
 *   },
 * });
 */
export function useEditPostOneMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<EditPostOneMutation, EditPostOneMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<EditPostOneMutation, EditPostOneMutationVariables>(EditPostOneDocument, options);
}
export type EditPostOneMutationHookResult = ReturnType<typeof useEditPostOneMutation>;
export type EditPostOneMutationResult = ApolloReactCommon.MutationResult<EditPostOneMutation>;
export type EditPostOneMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditPostOneMutation,
  EditPostOneMutationVariables
>;
export const EditPostOneWithoutImageDocument = gql`
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
export type EditPostOneWithoutImageMutationFn = ApolloReactCommon.MutationFunction<
  EditPostOneWithoutImageMutation,
  EditPostOneWithoutImageMutationVariables
>;

/**
 * __useEditPostOneWithoutImageMutation__
 *
 * To run a mutation, you first call `useEditPostOneWithoutImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostOneWithoutImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostOneWithoutImageMutation, { data, loading, error }] = useEditPostOneWithoutImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      content: // value for 'content'
 *      petName: // value for 'petName'
 *      petGender: // value for 'petGender'
 *   },
 * });
 */
export function useEditPostOneWithoutImageMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    EditPostOneWithoutImageMutation,
    EditPostOneWithoutImageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<EditPostOneWithoutImageMutation, EditPostOneWithoutImageMutationVariables>(
    EditPostOneWithoutImageDocument,
    options,
  );
}
export type EditPostOneWithoutImageMutationHookResult = ReturnType<typeof useEditPostOneWithoutImageMutation>;
export type EditPostOneWithoutImageMutationResult = ApolloReactCommon.MutationResult<EditPostOneWithoutImageMutation>;
export type EditPostOneWithoutImageMutationOptions = ApolloReactCommon.BaseMutationOptions<
  EditPostOneWithoutImageMutation,
  EditPostOneWithoutImageMutationVariables
>;
export const DelatePostOneDocument = gql`
  mutation DelatePostOne($postId: uuid!) {
    delete_posts_by_pk(id: $postId) {
      id
      image
      imageUrl
      user_id
    }
  }
`;
export type DelatePostOneMutationFn = ApolloReactCommon.MutationFunction<
  DelatePostOneMutation,
  DelatePostOneMutationVariables
>;

/**
 * __useDelatePostOneMutation__
 *
 * To run a mutation, you first call `useDelatePostOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDelatePostOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [delatePostOneMutation, { data, loading, error }] = useDelatePostOneMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDelatePostOneMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DelatePostOneMutation, DelatePostOneMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<DelatePostOneMutation, DelatePostOneMutationVariables>(
    DelatePostOneDocument,
    options,
  );
}
export type DelatePostOneMutationHookResult = ReturnType<typeof useDelatePostOneMutation>;
export type DelatePostOneMutationResult = ApolloReactCommon.MutationResult<DelatePostOneMutation>;
export type DelatePostOneMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DelatePostOneMutation,
  DelatePostOneMutationVariables
>;
export const UpdateUserProfileDocument = gql`
  mutation UpdateUserProfile($id: String!, $name: String!, $displayId: String!, $profile: String, $image: String) {
    insert_users_one(
      object: { id: $id, name: $name, display_id: $displayId, profile: $profile, image: $image }
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
export type UpdateUserProfileMutationFn = ApolloReactCommon.MutationFunction<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      displayId: // value for 'displayId'
 *      profile: // value for 'profile'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(
    UpdateUserProfileDocument,
    options,
  );
}
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = ApolloReactCommon.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables
>;
export const GetUserInfomationDocument = gql`
  query GetUserInfomation($display_id: String!) {
    users(where: { display_id: { _eq: $display_id } }) {
      posts_aggregate {
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

/**
 * __useGetUserInfomationQuery__
 *
 * To run a query within a React component, call `useGetUserInfomationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfomationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfomationQuery({
 *   variables: {
 *      display_id: // value for 'display_id'
 *   },
 * });
 */
export function useGetUserInfomationQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetUserInfomationQuery, GetUserInfomationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetUserInfomationQuery, GetUserInfomationQueryVariables>(
    GetUserInfomationDocument,
    options,
  );
}
export function useGetUserInfomationLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserInfomationQuery, GetUserInfomationQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetUserInfomationQuery, GetUserInfomationQueryVariables>(
    GetUserInfomationDocument,
    options,
  );
}
export type GetUserInfomationQueryHookResult = ReturnType<typeof useGetUserInfomationQuery>;
export type GetUserInfomationLazyQueryHookResult = ReturnType<typeof useGetUserInfomationLazyQuery>;
export type GetUserInfomationQueryResult = ApolloReactCommon.QueryResult<
  GetUserInfomationQuery,
  GetUserInfomationQueryVariables
>;
export const GetOneUserAllPostDocument = gql`
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

/**
 * __useGetOneUserAllPostQuery__
 *
 * To run a query within a React component, call `useGetOneUserAllPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserAllPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserAllPostQuery({
 *   variables: {
 *      display_id: // value for 'display_id'
 *   },
 * });
 */
export function useGetOneUserAllPostQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetOneUserAllPostQuery, GetOneUserAllPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetOneUserAllPostQuery, GetOneUserAllPostQueryVariables>(
    GetOneUserAllPostDocument,
    options,
  );
}
export function useGetOneUserAllPostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOneUserAllPostQuery, GetOneUserAllPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetOneUserAllPostQuery, GetOneUserAllPostQueryVariables>(
    GetOneUserAllPostDocument,
    options,
  );
}
export type GetOneUserAllPostQueryHookResult = ReturnType<typeof useGetOneUserAllPostQuery>;
export type GetOneUserAllPostLazyQueryHookResult = ReturnType<typeof useGetOneUserAllPostLazyQuery>;
export type GetOneUserAllPostQueryResult = ApolloReactCommon.QueryResult<
  GetOneUserAllPostQuery,
  GetOneUserAllPostQueryVariables
>;
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    users {
      id
      display_id
    }
  }
`;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
}
export function useGetAllUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = ApolloReactCommon.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetOneUserLikePostDocument = gql`
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
            image
            name
            created_at
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
  }
`;

/**
 * __useGetOneUserLikePostQuery__
 *
 * To run a query within a React component, call `useGetOneUserLikePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserLikePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserLikePostQuery({
 *   variables: {
 *      display_id: // value for 'display_id'
 *   },
 * });
 */
export function useGetOneUserLikePostQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetOneUserLikePostQuery, GetOneUserLikePostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetOneUserLikePostQuery, GetOneUserLikePostQueryVariables>(
    GetOneUserLikePostDocument,
    options,
  );
}
export function useGetOneUserLikePostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOneUserLikePostQuery, GetOneUserLikePostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetOneUserLikePostQuery, GetOneUserLikePostQueryVariables>(
    GetOneUserLikePostDocument,
    options,
  );
}
export type GetOneUserLikePostQueryHookResult = ReturnType<typeof useGetOneUserLikePostQuery>;
export type GetOneUserLikePostLazyQueryHookResult = ReturnType<typeof useGetOneUserLikePostLazyQuery>;
export type GetOneUserLikePostQueryResult = ApolloReactCommon.QueryResult<
  GetOneUserLikePostQuery,
  GetOneUserLikePostQueryVariables
>;
export const GetFollowUserPostDocument = gql`
  query GetFollowUserPost($user_id: String!) {
    posts(where: { user: { followed: { user_id: { _eq: $user_id } } } }) {
      id
      user_id
      image
      content
      petName
      petGender
      created_at
      user {
        id
        image
        name
        created_at
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
    users(where: { followed: { user_id: { _eq: $user_id } } }) {
      id
      display_id
      name
      profile
      image
      created_at
    }
  }
`;

/**
 * __useGetFollowUserPostQuery__
 *
 * To run a query within a React component, call `useGetFollowUserPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFollowUserPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFollowUserPostQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetFollowUserPostQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetFollowUserPostQuery, GetFollowUserPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetFollowUserPostQuery, GetFollowUserPostQueryVariables>(
    GetFollowUserPostDocument,
    options,
  );
}
export function useGetFollowUserPostLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetFollowUserPostQuery, GetFollowUserPostQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetFollowUserPostQuery, GetFollowUserPostQueryVariables>(
    GetFollowUserPostDocument,
    options,
  );
}
export type GetFollowUserPostQueryHookResult = ReturnType<typeof useGetFollowUserPostQuery>;
export type GetFollowUserPostLazyQueryHookResult = ReturnType<typeof useGetFollowUserPostLazyQuery>;
export type GetFollowUserPostQueryResult = ApolloReactCommon.QueryResult<
  GetFollowUserPostQuery,
  GetFollowUserPostQueryVariables
>;
export const GetOneUserFollowingDocument = gql`
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

/**
 * __useGetOneUserFollowingQuery__
 *
 * To run a query within a React component, call `useGetOneUserFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserFollowingQuery({
 *   variables: {
 *      display_id: // value for 'display_id'
 *   },
 * });
 */
export function useGetOneUserFollowingQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetOneUserFollowingQuery, GetOneUserFollowingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetOneUserFollowingQuery, GetOneUserFollowingQueryVariables>(
    GetOneUserFollowingDocument,
    options,
  );
}
export function useGetOneUserFollowingLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOneUserFollowingQuery, GetOneUserFollowingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetOneUserFollowingQuery, GetOneUserFollowingQueryVariables>(
    GetOneUserFollowingDocument,
    options,
  );
}
export type GetOneUserFollowingQueryHookResult = ReturnType<typeof useGetOneUserFollowingQuery>;
export type GetOneUserFollowingLazyQueryHookResult = ReturnType<typeof useGetOneUserFollowingLazyQuery>;
export type GetOneUserFollowingQueryResult = ApolloReactCommon.QueryResult<
  GetOneUserFollowingQuery,
  GetOneUserFollowingQueryVariables
>;
export const GetOneUserFollowerDocument = gql`
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

/**
 * __useGetOneUserFollowerQuery__
 *
 * To run a query within a React component, call `useGetOneUserFollowerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserFollowerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserFollowerQuery({
 *   variables: {
 *      display_id: // value for 'display_id'
 *   },
 * });
 */
export function useGetOneUserFollowerQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetOneUserFollowerQuery, GetOneUserFollowerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetOneUserFollowerQuery, GetOneUserFollowerQueryVariables>(
    GetOneUserFollowerDocument,
    options,
  );
}
export function useGetOneUserFollowerLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOneUserFollowerQuery, GetOneUserFollowerQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetOneUserFollowerQuery, GetOneUserFollowerQueryVariables>(
    GetOneUserFollowerDocument,
    options,
  );
}
export type GetOneUserFollowerQueryHookResult = ReturnType<typeof useGetOneUserFollowerQuery>;
export type GetOneUserFollowerLazyQueryHookResult = ReturnType<typeof useGetOneUserFollowerLazyQuery>;
export type GetOneUserFollowerQueryResult = ApolloReactCommon.QueryResult<
  GetOneUserFollowerQuery,
  GetOneUserFollowerQueryVariables
>;
export const IsFollowUserDocument = gql`
  query IsFollowUser($fromUserId: String!, $toUserId: String!) {
    relationships(where: { user_id: { _eq: $fromUserId }, follow_id: { _eq: $toUserId } }) {
      id
      user_id
      follow_id
    }
  }
`;

/**
 * __useIsFollowUserQuery__
 *
 * To run a query within a React component, call `useIsFollowUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsFollowUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsFollowUserQuery({
 *   variables: {
 *      fromUserId: // value for 'fromUserId'
 *      toUserId: // value for 'toUserId'
 *   },
 * });
 */
export function useIsFollowUserQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<IsFollowUserQuery, IsFollowUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<IsFollowUserQuery, IsFollowUserQueryVariables>(IsFollowUserDocument, options);
}
export function useIsFollowUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IsFollowUserQuery, IsFollowUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<IsFollowUserQuery, IsFollowUserQueryVariables>(IsFollowUserDocument, options);
}
export type IsFollowUserQueryHookResult = ReturnType<typeof useIsFollowUserQuery>;
export type IsFollowUserLazyQueryHookResult = ReturnType<typeof useIsFollowUserLazyQuery>;
export type IsFollowUserQueryResult = ApolloReactCommon.QueryResult<IsFollowUserQuery, IsFollowUserQueryVariables>;
export const AddFollowDocument = gql`
  mutation AddFollow($fromUserId: String!, $toUserId: String!) {
    insert_relationships_one(object: { user_id: $fromUserId, follow_id: $toUserId }) {
      id
      user_id
      follow_id
    }
  }
`;
export type AddFollowMutationFn = ApolloReactCommon.MutationFunction<AddFollowMutation, AddFollowMutationVariables>;

/**
 * __useAddFollowMutation__
 *
 * To run a mutation, you first call `useAddFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFollowMutation, { data, loading, error }] = useAddFollowMutation({
 *   variables: {
 *      fromUserId: // value for 'fromUserId'
 *      toUserId: // value for 'toUserId'
 *   },
 * });
 */
export function useAddFollowMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddFollowMutation, AddFollowMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<AddFollowMutation, AddFollowMutationVariables>(AddFollowDocument, options);
}
export type AddFollowMutationHookResult = ReturnType<typeof useAddFollowMutation>;
export type AddFollowMutationResult = ApolloReactCommon.MutationResult<AddFollowMutation>;
export type AddFollowMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddFollowMutation,
  AddFollowMutationVariables
>;
export const RemoveFollowDocument = gql`
  mutation RemoveFollow($fromUserId: String!, $toUserId: String!) {
    delete_relationships(where: { user_id: { _eq: $fromUserId }, follow_id: { _eq: $toUserId } }) {
      affected_rows
    }
  }
`;
export type RemoveFollowMutationFn = ApolloReactCommon.MutationFunction<
  RemoveFollowMutation,
  RemoveFollowMutationVariables
>;

/**
 * __useRemoveFollowMutation__
 *
 * To run a mutation, you first call `useRemoveFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFollowMutation, { data, loading, error }] = useRemoveFollowMutation({
 *   variables: {
 *      fromUserId: // value for 'fromUserId'
 *      toUserId: // value for 'toUserId'
 *   },
 * });
 */
export function useRemoveFollowMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveFollowMutation, RemoveFollowMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useMutation<RemoveFollowMutation, RemoveFollowMutationVariables>(
    RemoveFollowDocument,
    options,
  );
}
export type RemoveFollowMutationHookResult = ReturnType<typeof useRemoveFollowMutation>;
export type RemoveFollowMutationResult = ApolloReactCommon.MutationResult<RemoveFollowMutation>;
export type RemoveFollowMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RemoveFollowMutation,
  RemoveFollowMutationVariables
>;
export const GetSearchResultDocument = gql`
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

/**
 * __useGetSearchResultQuery__
 *
 * To run a query within a React component, call `useGetSearchResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSearchResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSearchResultQuery({
 *   variables: {
 *      word: // value for 'word'
 *   },
 * });
 */
export function useGetSearchResultQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<GetSearchResultQuery, GetSearchResultQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<GetSearchResultQuery, GetSearchResultQueryVariables>(
    GetSearchResultDocument,
    options,
  );
}
export function useGetSearchResultLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSearchResultQuery, GetSearchResultQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<GetSearchResultQuery, GetSearchResultQueryVariables>(
    GetSearchResultDocument,
    options,
  );
}
export type GetSearchResultQueryHookResult = ReturnType<typeof useGetSearchResultQuery>;
export type GetSearchResultLazyQueryHookResult = ReturnType<typeof useGetSearchResultLazyQuery>;
export type GetSearchResultQueryResult = ApolloReactCommon.QueryResult<
  GetSearchResultQuery,
  GetSearchResultQueryVariables
>;
