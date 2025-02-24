const { BadRequestError}=require("../customErrors")

const SignupUser=async (req,res,next)=>{
    const {username,email,password}=req.body
    if([username,email.password].some((field)=>field === '')){
        throw new BadRequestError("all field are required")
    }
    const EmailRegex= /^[^@]+@[^@]+\.[^@]+$/;

    if(!EmailRegex.test(email)){
        throw new BadRequestError("Invalid Email")
    }
    if(password.length < 6){
        throw new BadRequestError("password length must be ")
    }
}
const LoginUser=async (req,res,next)=>{}
const LogoutUser=async (req,res,next)=>{}
