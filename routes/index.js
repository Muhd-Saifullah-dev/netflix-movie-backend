const express = require("express");
const rootRoutes = express.Router();
const authRoute = require("./authRoute");
const movieRoute = require("./movieRoute");
const tvRoute = require("./tvRoute");

rootRoutes.use("/auth", authRoute);
rootRoutes.use("/movie", movieRoute);
rootRoutes.use("/tv", tvRoute);

module.exports = rootRoutes;
