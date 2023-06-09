const { AuthenticationError } = require("apollo-server-express");
const { User, Park, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
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

    parks: async () => {
      return Park.find().sort({ createdAt: -1 });
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

    addReview: async (parent, { reviewInput }, context) => {
      if (context.user) {
        const newReview = await Review.create({
          ...reviewInput,
          reviewUser: context.user.username,
        });

        return newReview;
      }
      throw new AuthenticationError("No Review!");
    },

    saveReview: async (parent, { reviewData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: reviewData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in");
    },

    removeReview: async (parent, { reviewId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { comments: { _id: reviewId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in");
    },

    addPark: async (parent, { parkInput }, context) => {
      if (context.user) {
        const newPark = await Park.create({
          ...parkInput,
          user: context.user._id,
        });

        return newPark;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    savePark: async (parent, { parkData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedParks: parkData } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
