import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Mutation {
    signUp(data: CreateUserData!): User!
    changePassword(data: ChangePasswordData): User!
    updateUser(data: UpdateUserData): User!
  }
  type Query {
    Users: [User!]!
    # user(email: String): User!
    # user(id: String): User!
  }
  type User {
    id: String
    name: String
    password: String
    email: String
    occupation: String
    image: String!
  }
  input UpdateUserData {
    id: String!
    name: String
    occupation: String
    image: String
  }
  input ChangePasswordData {
    id: String
    current_password: String
    new_password: String
  }
  input CreateUserData {
    name: String
    email: String
    password: String
    occupation: String
    image: String
  }
`;
