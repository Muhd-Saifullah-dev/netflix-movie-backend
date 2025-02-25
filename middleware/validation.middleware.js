const {validationResult }=require("express-validator")

const validationMiddleware=async(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        const firstError=errors.array()[0]
        return res.status(400).json({validationError:firstError})
    }
    next()
}

module.exports={validationMiddleware}