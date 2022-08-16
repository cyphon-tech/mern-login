const mongoose  = require("mongoose");



const userShema = new mongoose.Schema({
      name:{
            type:String,
            required:true
      },
      email:{
            type:String,
            required:true
      },
      Phone:{
            type:Number,
            required:true
      },
      work:{
            type:String,
            required:true
      },
      password:{
            type:String,
            required:true
      },
      cpassword:{
            type:String,
            required:true
      }
})

const User=new mongoose.model('USERS',userShema);

module.exports=User;