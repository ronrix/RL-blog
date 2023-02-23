import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Query($username: String!, $email: String!, $uid: String!) {
    login(username: $username, email: $email, uid: $uid) {
      id
      username
      email
      avatar
      description
      followers
      links
      bookmarks
    }
  }
`;

export const ADD_USER = gql`
  mutation($username: String!, $email: String!, $password: String!, $avatar: String!, $description: String!) {
    addUser(username: $username, email: $email, password: $password, avatar: $avatar, description: $description) {
      id
      email
      username
      avatar
      description
      createdAt
      updatedAt
    }
  }
`

