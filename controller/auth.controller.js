const { BadRequestError}=require("../customErrors");
const {User}=require("../model/index")
const { okResponse}=require("../utils/handlerErrors.util")

const SignupUser=async (req,res,next)=>{
    try {
        const {username,email,password}=req.body
        let existingUser=await User.findOne({
            $or:[{email},{username}]
        }) 
        if(existingUser){
            throw new BadRequestError("email or username is already")
        }
        const PROFILE_PICS=['/avatar1.png','/avatar2.jpg','/avatar3.png'];
        const image=PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)]
        const newUser=await User.create({
            username,
            email,
            password,
            image
        })
        const Token=await newUser.generateToken()
        okResponse(res,201,"User created Successfully",{user:{name:newUser.username,
            Image:newUser.image
        }},{token:Token})
    } catch (error) {
        console.error(`error in signup user :: ${error}`)
        next(error)
    }

}
const LoginUser=async (req,res,next)=>{
    const {email,password }=req.body
    const existingUser=await User.findOne({email})
    if(!existingUser){
        throw new BadRequestError("sorry user not found")
    }
    const matchPassword= existingUser.isPasswordCorrect(password)
    if(!matchPassword){
        throw new BadRequestError("Invalid Credientials !")
    }



}
const LogoutUser=async (req,res,next)=>{}
