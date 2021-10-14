const express = require("express");
const router = express.Router();
const MoviesModel = require("../models/Movie.model");

/* GET home page */
router.get("/index", (req, res, next) => res.render("index.hbs"));

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await MoviesModel.find();
    res.render("movies.hbs", { movies });
  } catch (err) {
    res.send("fatal error");
  }
});

router.get("/movies/:id([a-z0-9]{24})", async (req, res) => {
// router.get("/movies/:id", async (req, res) => {
  try {
    const film = await MoviesModel.findById(req.params.id);
    res.render("movieDetails.hbs", { film });
  } catch (err) {
    res.send("fatal error");
  }
});

router.get("/movies/star", async (req, res) => {
    res.send("star")
});


module.exports = router;
