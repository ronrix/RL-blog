import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Query($email: String!, $uid: String!) {
    login(email: $email, uid: $uid) {
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
  mutation($username: String!, $email: String!, $password: String!, $avatar: String!) {
    addUser(username: $username, email: $email, password: $password, avatar: $avatar) {
      id
      email
      username
      avatar
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
  query($id: ID!, $title: String!) {
    getBlog(id: $id, title: $title) {
      id
      user {
        id
        username
        email
        avatar
        links
        followers
        description
      }
      title
      description
      thumbnail
      likes
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

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      id
      category_name
      createdAt
    }
  }
`;

export const COMPLETE_USER_PROFILE = gql`
 mutation($username: String!, $description: String!, $links: JSON!) {
    completeProfile(username: $username, description: $description, links: $links) {
      id
      email
      username
      avatar
      description
      links
      createdAt
      updatedAt
    }
  }
`;

// the id here is the blog users id and not the logged in user
export const FOLLOW = gql`
  mutation($id: ID!) { 
    follow(id: $id) {
      msg
      status
    }
  }
`;

// the id here is the blog users id and not the logged in user
export const UNFOLLOW = gql`
  mutation($id: ID!) {
    unfollow(id: $id) {
      msg
      status
    }
  }
`;

export const READ_COUNT = gql`
  query($blogId: ID!) {
    readCount(blogId: $blogId) {
      msg
      status
    }
  }
`;

export const LIKE = gql`
  query($blogId: ID!) {
    like(blogId: $blogId) {
      msg
      status
    }
  }
`;

export const UNLIKE = gql`
  query($blogId: ID!) {
    unlike(blogId: $blogId) {
      msg
      status
    }
  }
`;

export const SAVE_BOOKMARK = gql`
  query($blogId: ID!) {
    saveToBookmark(blogId: $blogId) {
      msg
      status
    }
  }
`;


export const UNSAVE_BOOKMARK = gql`
  query($blogId: ID!) {
    unSaveToBookmark(blogId: $blogId) {
      msg
      status
    }
  }
`;