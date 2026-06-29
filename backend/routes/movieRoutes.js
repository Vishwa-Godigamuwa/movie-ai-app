const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

// Seed a sample movie
router.get("/seed", async (req, res) => {
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

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;