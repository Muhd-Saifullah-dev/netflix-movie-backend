const path=require("path")
require('dotenv').config({
path:path.resolve(__dirname,'../.env')
})

module.exports={
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    EXPIRE_DATE:process.env.EXPIRE_DATE,
    TOKEN_SECRET_KEY:process.env.TOKEN_SECRET_KEY
}