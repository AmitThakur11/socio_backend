const router = require('express').Router() 
const {body}= require("express-validator");

const authAction = require("../controller/auth.js");

router.post("/register",[body('email').isEmail(),body('password').isLength({
  min : 6})],authAction.register);
router.post("/login",authAction.login)

module.exports = router