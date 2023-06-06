const { Schema } = require('mongoose');

const destinationSchema = new Schema({
  destinations: [
    {
      type: String,
    },
  ],
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

module.exports = destinationSchema;
