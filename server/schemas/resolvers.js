const { AuthenticationError } = require("apollo-server-express");
//const { Park } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: (parent, args, context) => {
      if(!context.user) {
        throw new AuthenticationError('Not logged in');
      }
    }
  },

  Mutation: {
    login: async (parent, {email, password}) => {
      const token = signToken(user);
      return {
        token,
        user,
      };
    },

    addUser: async (parent, {username, email, password}) => {
      const token = signToken(user);

      return {
        token,
        user,
      };
    },
    saveReview: async (parent, { reviewData }) => {

    },
    removeReview: async (parent, { reviewId }) => {
      
    },
    addComment: async (parent, { reviewId, content }) => {
    },
  },
};

module.exports = resolvers;


