const { AuthenticationError } = require("apollo-server-express");
//const { Park } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {},

  Mutation: {},
};

module.exports = resolvers;
