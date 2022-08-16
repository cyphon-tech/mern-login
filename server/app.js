const dotenv = require("dotenv");
const express=require("express");
const mongoose=require("mongoose");
const app=express();


// server ko require kr rahe kyoki kahi aur se bula rahe 
// link the router file  
app.use(express.json());
app.use(require('./router/auth'));


dotenv.config({ path: './config.env' });

const PORT=process.env.PORT;

// const DB="mongodb+srv://cyphonlogin:viveksingh@cluster0.operkbg.mongodb.net/?retryWrites=true&w=majority"

require('./db/conn');
const User=require('./models/userSchema')

const middleware=(req,res,next)=>{
     console.log("hello vivek");
     
     next();
}




     

app.listen(PORT,()=>{
     console.log(`server is runing at ${PORT}`) ;
})


