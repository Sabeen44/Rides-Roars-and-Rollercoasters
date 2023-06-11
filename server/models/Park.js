const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const parkSchema = new Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
  image: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Park = model("Park", parkSchema);

module.exports = Park;
