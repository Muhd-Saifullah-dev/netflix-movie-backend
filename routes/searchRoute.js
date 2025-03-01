const express = require("express");
const searchRoute = express.Router();
const {
  searchMovie,
  searchPerson,
  searchTv,
  getSearchHistory,
  deleteSearchHistory,
} = require("../controller/search.controller");
const {
  ProtectedRouteMiddleware,
} = require("../middleware/protected.middleware");

searchRoute.get("/person/:query", ProtectedRouteMiddleware, searchPerson);
searchRoute.get("/movie/:query", ProtectedRouteMiddleware, searchMovie);
searchRoute.get("/tv/:query", ProtectedRouteMiddleware, searchTv);
searchRoute.get("/history", ProtectedRouteMiddleware, getSearchHistory);
searchRoute.delete(
  "/history/:id",
  ProtectedRouteMiddleware,
  deleteSearchHistory
);

module.exports = searchRoute;
