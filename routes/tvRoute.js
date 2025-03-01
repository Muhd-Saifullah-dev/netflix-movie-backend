const express = require("express");
const tvRoute = express.Router();
const {
  getPopularTv,
  getSimilarTv,
  getTvDetails,
  getTvTrailer,
  getTrendingTV,
} = require("../controller/tv.controller");
const {
  ProtectedRouteMiddleware,
} = require("../middleware/protected.middleware");

tvRoute.get("/trending", ProtectedRouteMiddleware, getTrendingTV);
tvRoute.get("/trailer/:id", ProtectedRouteMiddleware, getTvTrailer);
tvRoute.get("/detail/:id", ProtectedRouteMiddleware, getTvDetails);
tvRoute.get("/similar/:id", ProtectedRouteMiddleware, getSimilarTv);
tvRoute.get("/:category", ProtectedRouteMiddleware, getPopularTv);

module.exports = tvRoute;
