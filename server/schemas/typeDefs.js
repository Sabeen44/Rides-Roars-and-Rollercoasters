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
    addReview(reviewId: ID!, reviewText: String!): Review
    saveReview(reviewData: reviewInput): User
    removeReview(reviewId: ID!): User
  }
`;

module.exports = typeDefs;
