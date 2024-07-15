import { GraphQLResolveInfo } from 'graphql';
import { TUser, TPost, TComment } from '@/types/model';
import { GraphQLContext } from '@/types/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  id: Scalars['ID']['output'];
  post: Post;
  text: Scalars['String']['output'];
};

export type CreateCommentInput = {
  authorId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type CreatePostInput = {
  authorId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
  published: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  body?: Maybe<Scalars['String']['output']>;
  from?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createPost: Post;
  createUser: User;
  deleteComment: Comment;
  deletePost: Post;
  deleteUser: User;
  sendMessage: Message;
  updateComment: Comment;
  updatePost: Post;
  updateUser: User;
};


export type MutationCreateCommentArgs = {
  data: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendMessageArgs = {
  input: SendMessageInput;
};


export type MutationUpdateCommentArgs = {
  data: UpdateCommentInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  data: UpdatePostInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
  id: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  author: User;
  body: Scalars['String']['output'];
  comments: Array<Maybe<Comment>>;
  id: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  comments: Array<Maybe<Comment>>;
  getUser: User;
  me: User;
  post: Post;
  posts: Array<Maybe<Post>>;
  users: Array<Maybe<User>>;
};


export type QueryGetUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryPostsArgs = {
  query?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  comment_query?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
};

export type SendMessageInput = {
  body: Scalars['String']['input'];
  from: Scalars['String']['input'];
  roomId: Scalars['ID']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  count: Scalars['Int']['output'];
  roomMessage: Message;
  userCreated: User;
};


export type SubscriptionRoomMessageArgs = {
  roomId: Scalars['ID']['input'];
};

export type UpdateCommentInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  body?: InputMaybe<Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']['output']>;
  comments: Array<Maybe<Comment>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posts: Array<Maybe<Post>>;
};


export type UserCommentsArgs = {
  comment_query?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<TComment>;
  CreateCommentInput: CreateCommentInput;
  CreatePostInput: CreatePostInput;
  CreateUserInput: CreateUserInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Message: ResolverTypeWrapper<Message>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<TPost>;
  Query: ResolverTypeWrapper<{}>;
  SendMessageInput: SendMessageInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  UpdateCommentInput: UpdateCommentInput;
  UpdatePostInput: UpdatePostInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<TUser>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: TComment;
  CreateCommentInput: CreateCommentInput;
  CreatePostInput: CreatePostInput;
  CreateUserInput: CreateUserInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Message: Message;
  Mutation: {};
  Post: TPost;
  Query: {};
  SendMessageInput: SendMessageInput;
  String: Scalars['String']['output'];
  Subscription: {};
  UpdateCommentInput: UpdateCommentInput;
  UpdatePostInput: UpdatePostInput;
  UpdateUserInput: UpdateUserInput;
  User: TUser;
};

export type CommentResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'data'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'data'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'data'>>;
  deleteComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deletePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  sendMessage?: Resolver<ResolversTypes['Message'], ParentType, ContextType, RequireFields<MutationSendMessageArgs, 'input'>>;
  updateComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'data' | 'id'>>;
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'data' | 'id'>>;
  updateUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'data' | 'id'>>;
};

export type PostResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  posts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, Partial<QueryPostsArgs>>;
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type SubscriptionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  count?: SubscriptionResolver<ResolversTypes['Int'], "count", ParentType, ContextType>;
  roomMessage?: SubscriptionResolver<ResolversTypes['Message'], "roomMessage", ParentType, ContextType, RequireFields<SubscriptionRoomMessageArgs, 'roomId'>>;
  userCreated?: SubscriptionResolver<ResolversTypes['User'], "userCreated", ParentType, ContextType>;
};

export type UserResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType, Partial<UserCommentsArgs>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  Comment?: CommentResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

