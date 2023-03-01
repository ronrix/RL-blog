// The GraphQL schema
export default `#graphql
  scalar GraphQLDateTime
  scalar JSON

  type UserType {
    id: ID!
    username: String!
    email: String!
    password: String!
    avatar: String!
    description: String!
    following: [String!]
    followers: [String!]
    links: JSON!
    bookmarks: [String!]
    createdAt: GraphQLDateTime
    updatedAt: GraphQLDateTime
  }

  type BlogType {
    id: ID!
    user: UserType! 
    title: String!
    description: String!
    thumbnail: String!
    content: String!
    category: String!
    read_duration: String
    createdAt: GraphQLDateTime
    updatedAt: GraphQLDateTime
  }

  type Response {
    msg: String!
    status: Int!
  }

  type Category {
    id: ID!
    category_name: String!
    createdAt: GraphQLDateTime
  }

  type Query {
    hello: String
    world: String
    user(id: ID!): UserType
    getUserBlogs(user_id: ID!): [BlogType]
    getAllBlogs: [BlogType]
    getBlog(id: ID!, title: String!): BlogType
    login(email: String!, uid: String!): UserType
    getTrendingBlogs: [BlogType]
    logout: Response
    getAllCategories: [Category]
    readCount(blogId: ID!): Response
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, avatar: String!): UserType
    completeProfile(username: String!, description: String!, links: JSON!): UserType
    createBlog(user: ID!, title: String!, description: String!, thumbnail: String!, content: String!, category: String!, read_duration: String!): BlogType
    follow(id: ID!): Response
    unfollow(id: ID!): Response
  }
`;