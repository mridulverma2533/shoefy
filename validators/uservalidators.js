const {check,validationResult}=require("express-validator");
const req = require("express/lib/request");
// const { successResponseWithData, ErrorResponse,invalidresponse } = require("../helper/apirespnse");
const status = '103'


exports.validateSinginRequest=[
    check('email')
    .isEmail()
    .withMessage({status:103,message:"invalid email"}),
    check('password')
    .isLength({min:6})
    .withMessage("password must be atleast 6 character long")
];

exports.isRequestValidated=(req,res,next)=>{
    const errors=validationResult(req);
    // console.log(errors);
    if(errors && errors.errors.length>0){
        return  res.status(400).json({error:errors.errors[0].msg});
        // return invalidresponse(res, "invalid email");
        
    }
    next();
   }