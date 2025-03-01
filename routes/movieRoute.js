const express = require("express");
const movieRoute = express.Router();
const {
  getTrendingMovies,
  getMovieTrailer,
  getMovieDetails,
  getSimilarMovie,
  getPopularMovie,
} = require("../controller/movie.controller");
const {
  ProtectedRouteMiddleware,
} = require("../middleware/protected.middleware");

movieRoute.get("/trending", ProtectedRouteMiddleware, getTrendingMovies);
movieRoute.get("/trailer/:id", ProtectedRouteMiddleware, getMovieTrailer);
movieRoute.get("/detail/:id", ProtectedRouteMiddleware, getMovieDetails);
movieRoute.get("/similar/:id", ProtectedRouteMiddleware, getSimilarMovie);
movieRoute.get("/:category", ProtectedRouteMiddleware, getPopularMovie);

module.exports = movieRoute;
