const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  genre: [
    {
      type: String
    }
  ],

  rating: {
    type: Number
  },

  runtime: {
    type: Number
  },

  moodTags: [
    {
      type: String
    }
  ],

  language: {
    type: String
  }
});

module.exports = mongoose.model("Movie", movieSchema);