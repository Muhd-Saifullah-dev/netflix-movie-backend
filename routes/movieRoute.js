const express = require("express");
const movieRoute = express.Router();
const {
  getTrendingMovies,
  getMovieTrailer,
  getMovieDetails,
  getSimilarMovie,
  getPopularMovie,
} = require("../controller/movie.controller");

movieRoute.get("/trending", getTrendingMovies);
movieRoute.get("/trailer/:id", getMovieTrailer);
movieRoute.get("/detail/:id", getMovieDetails);
movieRoute.get("/similar/:id", getSimilarMovie);
movieRoute.get("/:category", getPopularMovie);

module.exports = movieRoute;
