import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar DateTime

  type User {
    useridx: ID!
    usertypeidx: ID!
    jointypeidx: ID!
    username: String!
    userid: String!
    useremail: String!
    usercreatedat: DateTime!
  }

  type Session {
    sessionidx: ID!
    sessiontoken: String!
    userid: String!
    sessionexpiry: DateTime!
  }

  type JoinType {
    jointypeidx: ID!
    jointypename: String!
  }

  type UserType {
    usertypeidx: ID!
    usertypename: String!
  }

  type VerificationToken {
    identifier: String!
    token: String!
    tokenexpireat: DateTime!
  }

  input CreateUserInput {
    usertypeidx: ID = 2
    jointypeidx: ID = 1
    username: String!
    userid: String!
    useremail: String!
    userpassword: String!
  }

  type Query {
    users: [User!]!
    user(useridx: ID!): User
    sessions: [Session!]!
    joinTypes: [JoinType!]!
    userTypes: [UserType!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(useridx: ID!, input: CreateUserInput!): User
    deleteUser(useridx: ID!): Boolean
    createSession(userid: String!): Session
    deleteSession(sessionidx: ID!): Boolean
  }
`;