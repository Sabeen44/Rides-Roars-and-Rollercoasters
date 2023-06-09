const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Park {
    id: ID!
    name: String
  }

  type Review {
    id: ID!
    title: String!
    content: String!
  }

  type Comment {
    id: ID!
    commentText: String!
  }

  input parkInput {
    name: String!
    location: String!
    description: String!
  }

  input reviewInput {
    title: String!
    content: String!
    rating: Int!
    description: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    park: Park
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentId: ID!, commentText: String!): Comment
    addPark(park: String): Park
    savePark(parkData: parkInput!): User
    removePark(parkId: ID!): User
    addReview(reviewData: reviewInput!): User
    saveReview(reviewData: reviewInput!): User
    removeReview(reviewId: ID!): User
  }
`;

module.exports = typeDefs;
