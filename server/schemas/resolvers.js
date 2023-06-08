const { AuthenticationError } = require("apollo-server-express");
//const { Park } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // Query: {
  //   me: (parent, args, context) => {
  //     if (!context.user) {
  //       throw new AuthenticationError("Not logged in");
  //     }
  //     return context.user;
  //   },
  // },

  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("You are not logged in");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Email and Password are incorrect!");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Email and Password are incorrect!");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveReview: async (parent, { reviewData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedReviews: reviewData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in");
    },
    removeReview: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedReviews: { reviewId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in");
    },
  },
};

module.exports = resolvers;
