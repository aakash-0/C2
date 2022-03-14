const { default: mongoose } = require("mongoose");

const fixedSchema= new mongoose.Schema({
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
    start_date:{
        type:Number,
        required:true
    },
    maturity_date:{
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

const Fixed=mongoose.model("fixed",fixedSchema);

module.exports=Fixed;