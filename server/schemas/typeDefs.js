const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Review {
    id: ID!
    title: String!
    content: String!
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

  type Review {
    _id: ID
    reviewText: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    park: Park
  }

  type Park {
    _id: ID
    title: String
    description: String
    image: String
  }

  type Query {
    parks: [Park]
    park(parkId: ID!): Park
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    addPark(park: String): Park
    savePark(parkData: parkInput!): User
    removePark(parkId: ID!): User
    addReview(reviewId: ID!, reviewText: String!): Review
   
    removeReview(parkId: ID!, reviewId: ID!): Park
  }
  }
`;

module.exports = typeDefs;
