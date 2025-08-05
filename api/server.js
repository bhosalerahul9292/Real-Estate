const express = require('express')
const mongoose= require('mongoose')
const dotenv =require('dotenv')
const userRouter =require('./routes/user.routes')
const authRouter = require('./routes/auth.routes')

dotenv.config();

// create the app object
const app = express()

// To allow the json 
app.use(express.json())

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
app.use('/api/auth',authRouter)


// create the listening port
app.listen(3000,()=>{
    console.log("server has been started on 3000 port !!");  
})


