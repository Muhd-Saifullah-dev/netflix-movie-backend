const express = require("express");
const rootRoutes = express.Router();
const authRoute = require("./authRoute");
const movieRoute = require("./movieRoute");
const tvRoute = require("./tvRoute");
const searchRoute = require("./searchRoute");

rootRoutes.use("/auth", authRoute);
rootRoutes.use("/movie", movieRoute);
rootRoutes.use("/tv", tvRoute);
rootRoutes.use("/search", searchRoute);

module.exports = rootRoutes;
