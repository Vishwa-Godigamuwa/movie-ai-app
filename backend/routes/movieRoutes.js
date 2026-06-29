const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

router.get("/seed", async (req, res) =>  {
  try {
    const movie = new Movie({
      title: "Inception",
      genre: ["Sci-Fi", "Action"],
      rating: 8.8,
      runtime: 148,
      moodTags: ["excited", "curious"],
      language: "English"
    });

    await movie.save();

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;