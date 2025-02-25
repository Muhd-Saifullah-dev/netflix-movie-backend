const express=require("express")
const rootRoutes=express.Router()
const authRoute=require("./authRoute")


rootRoutes.use("/auth",authRoute)


module.exports=rootRoutes