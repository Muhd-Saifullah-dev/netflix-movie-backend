const { body}=require("express-validator")

const signupValidation=[
    body('username')
    .notEmpty().withMessage('username is required')
    .isLength({min:5 }).withMessage('Username must be at least 5 character long')
    .trim(),
    body('email')
    .notEmpty().withMessage('email is required')
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),
    body('password').isLength({min:6}).withMessage('password must be at least 6 character long')
    .notEmpty().withMessage('password is required')
]

module.exports=signupValidation