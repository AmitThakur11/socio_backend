const User = require("../models/user.js");
const {setResponse} = require("../assets.js")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {validationResult}= require("express-validator");
const register = async(req,res)=>{

  
  try{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return setResponse(res,400, {errors: errors.array()})
    }

    let {firstname , lastname , username , email , password ,gender, profile_pic , dob } = req.body;

  const findUser = await User.findOne({email})
  console.log(findUser)
  if(findUser){
    return setResponse(res,400,"User already registered")
  }

  password = bcrypt.hashSync(password, 12);
  const newUser = new User({firstname , lastname , username , email , gender , password , profile_pic , dob});

  

  await newUser.save((err,docs)=>{
    if(err)throw err 
    setResponse(res,200,"registeration successfull",{username : docs })
  })
  }catch(err){
    setResponse(res,500,err.message)
  }
}


const login = async(req,res)=>{
  const { userIdentity , password } = req.body ; 
  try{
    const findUser = await User.find({
      $or : [{username : userIdentity},{email : userIdentity}]
    })
    if(!findUser){
      return setResponse(res,400,"user not registered")
    }
    const checkPassword =  bcrypt.compareSync(password , findUser.password);

    if(!checkPassword){
      return setResponse(res,400,"password incorrect")
    }

    const token = await jwt.sign({_id : findUser._id}, process.env.JWT_SECRET)

    setResponse(res,200,"login successful",{
      username : findUser.username,
      email : findUser.email,
      token
    })



  }catch(err){
    setResponse(res,500,err.message)
  }
}

module.exports = {register , login}