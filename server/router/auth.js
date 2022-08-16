
const express=require("express");
const User = require("../models/userSchema");
// now this router behave like express all access all functionlaity of express 
const router=express.Router();

// require('./db/conn');


router.get('/',(req,res)=>{
      res.send('hello  vivek from router')
})


router.post('/register',(req,res)=>{
      

const {name, email, Phone ,work ,password ,cpassword} = req.body;


  
if(!name || !email || !Phone || !work || !password || !cpassword )
{
      return res.status(422).json({error:"plz fill all detail properly"});
}

// checking the user in database  
// left side email is database email and right side email is which user enter just 

User.findOne({email:email})
.then((userexist)=>{
      if(userexist){
            return res.status(422).json({error:"user already exist"});  
      }

// if user not exist then create new data into database 

      const user =new User({name, email, Phone ,work ,password ,cpassword});
      console.log(user);

      
      user.save().then(()=>{
            res.status(201).json({message:"user register successfully"});   
      }).catch((e)=>{
            res.status(500).json({message:"user not registered"});   
      });
      
}).catch(err=>{
      console.log(err);

});


});






module.exports=router;