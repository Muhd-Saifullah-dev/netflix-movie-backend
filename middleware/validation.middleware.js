const {validationResult }=require("express-validator")

const validatioMiddleware=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({validationError:errors.array()})
    }
    next()
}

module.exports=validatioMiddleware