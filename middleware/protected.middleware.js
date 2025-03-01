const { BadRequestError } = require("../customErrors");
const JWT = require("jsonwebtoken");
const { TOKEN_SECRET_KEY } = require("../configs/config");
const {User} = require("../model/index");

const ProtectedRouteMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies["netflix-token"];
    if (!token) {
      throw new BadRequestError("UnAuthorized Token is not  found");
    }
    const decoded = JWT.verify(token, TOKEN_SECRET_KEY);
    const user = await User.findById(decoded?.id)
 
    if (!user) {
      throw new BadRequestError("user Not found Please login again");
    }
    req.user = user;
    next();
  } catch (error) {
    if (error instanceof JWT.JsonWebTokenError) {
      throw next(new BadRequestError("token is expired now"));
    }
    console.error(`error in protected Route :: ${error}`);
    next(error);
  }
};

module.exports = { ProtectedRouteMiddleware };
