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

export const LOGOUT = gql`
  query {
    logout {
      msg
      status
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

export const GET_USER_BLOGS = gql`
  query($user_id: ID!) {
    getUserBlogs(user_id: $user_id) {
      id
      user {
        id
        username
        email
        avatar
      }
      title
      description
      thumbnail
      content
      category
      read_duration
      createdAt 
    }
  }
`;

export const ADD_BLOG = gql`
  mutation($user: ID!, $title: String!, $description: String!, $thumbnail: String!, $content: String!, $category: String!, $read_duration: String!) {
    createBlog(user: $user, title: $title, description: $description, thumbnail: $thumbnail, content: $content, category: $category, read_duration: $read_duration) {
      user {
        id
        username
        email
        avatar
      }
      content
      category
      read_duration
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_USER_AUTH = gql`
  query($user_id: ID!) {
    user(id: $user_id) {
      id
      username
      email
      avatar
      bookmarks
      description
      links
      followers
    }
  }
`;

export const GET_BLOGS = gql`
  query {
    getAllBlogs {
      id
      user {
        id
        username
        email
        avatar
        followers
        description
      }
      title
      description
      thumbnail
      content
      category
      read_duration
      createdAt 
    }
  }
`;

export const GET_BLOG = gql`
  query($id: ID!) {
    getBlog(id: $id) {
      id
      user {
        id
        username
        email
        avatar
        followers
        description
      }
      title
      description
      thumbnail
      content
      category
      read_duration
      createdAt 
    }
  }
`;

export const GET_TRENDING_BLOGS = gql`
  query {
    getTrendingBlogs {
      id
      user {
        id
        username
        email
        avatar
        followers
        description
      }
      title
      description
      thumbnail
      content
      category
      read_duration
      createdAt 
    }
  }
`;