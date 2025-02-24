const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const JWT=require("jsonwebtoken")
const {TOKEN_SECRET_KEY,EXPIRE_DATE }=require("../configs/config")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  searchHistory: {
    type: Array,
    default: [],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const Salt =  bcrypt.genSaltSync(11);
  this.password = await bcrypt.hash(this.password, Salt);
});

userSchema.methods.isPasswordCorrect= async function (password){
    return bcrypt.compareSync(password,this.password)
}

userSchema.methods.generateToken=function(){
    return JWT.sign({
        id:this._id,
        username:this.username,
        email:this.email
    },TOKEN_SECRET_KEY,{
      expiresIn:EXPIRE_DATE
    }
)
}

const User = new mongoose.model("User", userSchema);
module.exports = User;
