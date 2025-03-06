const DB_NAME="Netflix-clone"
const CookieOption={
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day min cookie expires
    sameSite:"strict",
    secure:process.env.NODE_ENV !=="development",
    secure:true
}
module.exports={
    DB_NAME,
    CookieOption
}