const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Park {
    id: ID!
    name: String
  }

  type Review {
    id: ID!
    title: String!
    content: String!
    rating: Int! #   user: User!}
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveReview(reviewData: reviewInput!): User
    removeReview(reviewId: ID!): User
  }
`;

module.exports = typeDefs;
