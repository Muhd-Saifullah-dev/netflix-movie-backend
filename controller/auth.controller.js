const { BadRequestError } = require("../customErrors");
const { User } = require("../model/index");
const { okResponse } = require("../utils/handlerErrors.util");
const { CookieOption } = require("../constant");

const SignupUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    let existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      throw new BadRequestError("email or username is already");
    }
    const PROFILE_PICS = ["/avatar1.png", "/avatar2.jpg", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
    const newUser = await User.create({
      username,
      email,
      password,
      image,
    });
    const Token = await newUser.generateToken();
    const userResponse = newUser.toObject();
    delete userResponse.password;
    res.cookie("netflix-token", Token, CookieOption);

    okResponse(
      res,
      201,
      "User created Successfully",
      { user: userResponse },
      { token: Token }
    );
  } catch (error) {
    console.error(`error in signup user :: ${error}`);
    next(error);
  }
};
const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new BadRequestError("sorry user not found");
    }
    const matchPassword = await existingUser.isPasswordCorrect(password);
    if (!matchPassword) {
      throw new BadRequestError("Invalid Credientials !");
    }
    const Token = await existingUser.generateToken();
    const userResponse = existingUser.toObject();
    delete userResponse.password;
    res.cookie("netflix-token", Token, CookieOption);
    okResponse(
      res,
      200,
      "User logged In successfully ",
      { user: userResponse },
      { token: Token }
    );
  } catch (error) {
    console.error(`error in login user :: ${error}`);
    next(error);
  }
};
const LogoutUser = async (req, res, next) => {
  try {
    res.clearCookie("netflix-token");
    okResponse(res, 200, "user logged out successfully ");
  } catch (error) {
    console.error(`error in logout user :: ${error}`);
    next(error);
  }
};

module.exports = {
  SignupUser,
  LoginUser,
  LogoutUser,
};
