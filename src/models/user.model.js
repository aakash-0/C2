const  mongoose  = require("mongoose");

const userSchema= new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    middle_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gendrer:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

const User=mongoose.model("user",userSchema);

module.exports=User;