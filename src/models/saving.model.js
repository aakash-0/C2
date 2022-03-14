const { default: mongoose } = require("mongoose");

const savingSchema= new mongoose.Schema({
    account_no:{
        type:String,
        required:true
    },
    
    balance:{
        type:String,
        required:true
    },
    interest:{
        type:Number,
        required:true
    },
    masterId:{
        type:mongoose.SchemaType.ObjectId,
        ref:"master"
    },
   
},{
    timestamps:true
})

const Master=mongoose.model("master",branchSchema);

module.exports=Master;