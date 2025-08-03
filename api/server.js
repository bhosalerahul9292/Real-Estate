const express = require('express')
const mongoose= require('mongoose')
const dotenv =require('dotenv')
const userRouter =require('./routes/user.routes')

dotenv.config();

// create the app object
const app = express()

// connect to mongoDB
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to DB");    
})
.catch((error)=>{
console.log(error);
})

// use the routes
app.use('/api/user',userRouter)


// create the listening port
app.listen(3000,()=>{
    console.log("server has been started on 3000 port !!");  
})


