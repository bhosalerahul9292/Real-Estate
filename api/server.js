const express = require('express')

// create the app object
const app = express()

app.get('/',(req,resp)=>{

})

// create the listening port
app.listen(3000,()=>{
    console.log("server has been started on 3000 port !!");
    
})