const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : {
      type : String,
      required : true
    },
    lastname : {
      type : String,
      required : true
    },
    username : {
      type : String,
      required : true ,
      unique : true,
    },
    email : {
      type : String,
      required : true,
      unique : true
    },
    password :{
      type : String,
      required : true,
      length : {
        min : 6
      }
    },
    gender : {
      type : String,
      required : true
    },
    dob : {
      type: Date,
      required:true
    },
    profile_pic : {
      type : String,
      default:"https://i.pinimg.com/564x/2a/40/6b/2a406bf58db22cc7818ad1ff48c158cf.jpg"
    }
  
})

const User = mongoose.model('User', userSchema)
module.exports = User
