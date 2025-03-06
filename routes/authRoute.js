const express = require("express");
const authRoute = express.Router();
const {
  SignupUser,
  LoginUser,
  LogoutUser,
  AuthCheck
} = require("../controller/auth.controller");
const {ProtectedRouteMiddleware }=require("../middleware/protected.middleware")
const signupValidation = require("../express-validator/signup.validation");
const loginValidation = require("../express-validator/login.validation");
const { validationMiddleware } = require("../middleware/validation.middleware");

authRoute.post("/signup", signupValidation, validationMiddleware, SignupUser);
authRoute.post("/login", loginValidation, validationMiddleware, LoginUser);
authRoute.post("/logout", LogoutUser);
authRoute.get("/auth-check",ProtectedRouteMiddleware,AuthCheck)
module.exports = authRoute;
