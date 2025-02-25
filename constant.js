const DB_NAME="Netflix-clone"
const CookieOption={
    httpOnly: true,
    maxAge: 3 * 60 * 1000, // 3 min cookie expires
    sameSite:"strict",
    secure:process.env.NODE_ENV !=="development"
}
module.exports={
    DB_NAME,
    CookieOption
}