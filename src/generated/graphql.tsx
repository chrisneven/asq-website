import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  address?: Maybe<Array<Maybe<Address>>>;
};

export type CreateUserInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  addresses: Array<AddressInput>;
};

export type EditUserInput = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  addresses?: Maybe<Array<AddressInput>>;
};

export type ChatLine = {
  __typename?: 'ChatLine';
  id: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  sender: User;
};

export type ChatLineInput = {
  chatId: Scalars['Int'];
  userId: Scalars['Int'];
  message: Scalars['String'];
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['Int'];
  messages?: Maybe<Array<Maybe<ChatLine>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  chatSubscribe?: Maybe<ChatLine>;
};


export type SubscriptionChatSubscribeArgs = {
  chatId: Scalars['Int'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<AuthPayload>;
  login?: Maybe<AuthPayload>;
  createUser?: Maybe<User>;
  editUser?: Maybe<User>;
  archiveUser?: Maybe<User>;
  createChatLine: ChatLine;
};


export type MutationSignupArgs = {
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationEditUserArgs = {
  input: EditUserInput;
};


export type MutationArchiveUserArgs = {
  id: Scalars['Int'];
};


export type MutationCreateChatLineArgs = {
  input: ChatLineInput;
};

export type Address = {
  __typename?: 'Address';
  id?: Maybe<Scalars['Int']>;
  street: Scalars['String'];
  zipcode: Scalars['String'];
  country: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  street: Scalars['String'];
  zipcode: Scalars['String'];
  country: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  users?: Maybe<Array<Maybe<User>>>;
  chat?: Maybe<Chat>;
};


export type QueryChatArgs = {
  id: Scalars['Int'];
};

export type SettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingsQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
    & { address?: Maybe<Array<Maybe<(
      { __typename?: 'Address' }
      & Pick<Address, 'id' | 'street' | 'description' | 'zipcode'>
    )>>> }
  )>>> }
);


export const SettingsQueryDocument = gql`
    query SettingsQuery {
  users {
    id
    name
    email
    address {
      id
      street
      description
      zipcode
    }
  }
}
    `;

/**
 * __useSettingsQuery__
 *
 * To run a query within a React component, call `useSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingsQuery(baseOptions?: Apollo.QueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
        return Apollo.useQuery<SettingsQuery, SettingsQueryVariables>(SettingsQueryDocument, baseOptions);
      }
export function useSettingsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          return Apollo.useLazyQuery<SettingsQuery, SettingsQueryVariables>(SettingsQueryDocument, baseOptions);
        }
export type SettingsQueryHookResult = ReturnType<typeof useSettingsQuery>;
export type SettingsQueryLazyQueryHookResult = ReturnType<typeof useSettingsQueryLazyQuery>;
export type SettingsQueryQueryResult = Apollo.QueryResult<SettingsQuery, SettingsQueryVariables>;