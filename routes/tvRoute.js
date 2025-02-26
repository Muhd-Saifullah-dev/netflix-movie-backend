const express = require("express");
const tvRoute = express.Router();
const {
  getPopularTv,
  getSimilarTv,
  getTvDetails,
  getTvTrailer,
  getTrendingTV,
} = require("../controller/tv.controller");

tvRoute.get("/trending", getTrendingTV);
tvRoute.get("/trailer/:id", getTvTrailer);
tvRoute.get("/detail/:id", getTvDetails);
tvRoute.get("/similar/:id", getSimilarTv);
tvRoute.get("/:category", getPopularTv);

module.exports = tvRoute;
