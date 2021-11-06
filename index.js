const express = require('express');
const dbConnect = require("./dbConnect.js");
const authRoute = require("./routes/auth.js")
require('dotenv').config()
const cors = require('cors')
const app = express();



app.use(cors())
app.use(express.json())



const port = process.env.PORT 

dbConnect();

app.get("/",(req,res)=>{
  res.status(200).send("welcome")
})

app.use("/auth", authRoute)
app.listen(port , ()=>console.log(`server running on ${port}`))