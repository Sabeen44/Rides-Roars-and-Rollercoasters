const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const reviewSchema = new Schema({
  reviewText: {
    type: String,
    required: "You need to leave a comment!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  reviewUser: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  reviews: [
    {
      reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

module.exports = reviewSchema;
