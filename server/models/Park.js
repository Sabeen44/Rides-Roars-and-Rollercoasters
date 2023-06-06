const { Schema } = require('mongoose');

const parkSchema = new Schema({
  parks: [
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
});

module.exports = parkSchema;
