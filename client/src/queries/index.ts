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

export const ADD_BLOG = gql`
  mutation($user_id: ID!, $content: String!, $category: String!, $read_duration: String!) {
    createBlog(user_id: $user_id, content: $content, category: $category, read_duration: $read_duration) {
      user_id
      content
      category
      read_duration
      createdAt
      updatedAt
    }
  }
`;

