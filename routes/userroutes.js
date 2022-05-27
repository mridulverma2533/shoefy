const router=require("express").Router();

const controller = require("../controller/usercontroller")
const auth = require("../middleware/auth").authCustomer
const {validateSinginRequest, isRequestValidated } = require("../validators/uservalidators");

// router.post("/register",validateSinginRequest,isRequestValidated,controller.register);
router.post("/register",validateSinginRequest,isRequestValidated,controller.register);
router.post("/login",controller.login);
router.post("/addwallet",auth,controller.wallet)
// router.get("/findwallet/:id",controller.find)
router.post("/addtoken",auth,controller.addhash)



module.exports=router;