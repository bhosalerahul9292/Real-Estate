const express = require('express')
const mongoose= require('mongoose')
const dotenv =require('dotenv')
dotenv.config();
// create the app object
const app = express()

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to DB");    
})
.catch((error)=>{
console.log(error);
})

app.get('/',(req,resp)=>{

})

// create the listening port
app.listen(3000,()=>{
    console.log("server has been started on 3000 port !!");
    
})