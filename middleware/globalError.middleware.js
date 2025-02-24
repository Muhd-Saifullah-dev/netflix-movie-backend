const { handleError}=require("../utils/handlerErrors.util")

const globalErrorMiddleware = (error, req, res, next) => {
  const message = error.message ?? "something went wrong";
  const status = error.status ?? 500;
  return handleError(res,status,message,null)
};

module.exports=globalErrorMiddleware