const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/SignIn-Sys')
.then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log('database could not connect')
})