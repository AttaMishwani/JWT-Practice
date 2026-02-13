const express  = require('express');
const router  = express.Router();
const {register , login, user} = require("../controllers/auth-controller");
const Validate = require("../middlewares/validate-middleware");
const {signupSchema , logInSchema} = require('../validators/auth-validators');
const authMiddleware = require('../middlewares/auth-middleware');


router.post("/register", Validate(signupSchema), register);

router.post("/login" ,Validate(logInSchema), login);

router.get("/user" , authMiddleware , user)


module.exports = router;