const mongoose = require('mongoose');

module.exports = ()=>{
  return mongoose.connect(process.env.MONGO_URL ,{
    useNewUrlParser : true,
    useUnifiedTopology : true
  }).then(()=>console.log("database connection success")).catch((err)=>console.log(err))
} 