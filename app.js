const express=require("express")
const app=express()
const ReqResInspector=require("express-req-res-inspector")
const globalErrorMiddleware = require("./middleware/globalError.middleware")
const rootRoutes=require("./routes/index")




app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(ReqResInspector())
app.get("/api/v1/heath-check",(req,res,next)=>{
    return res.status(200).json({
        success:true,
        data:null,
        message:"Server is running"
    })
})


// routes define here
app.use("/api/v1",rootRoutes)





app.use(globalErrorMiddleware)


module.exports=app