const express = require("express");
const rootRoutes = express.Router();
const authRoute = require("./authRoute");
const movieRoute = require("./movieRoute");

rootRoutes.use("/auth", authRoute);
rootRoutes.use("/movie", movieRoute);

module.exports = rootRoutes;
