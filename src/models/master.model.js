const { default: mongoose } = require("mongoose");

const masterSchema= new mongoose.Schema({
    balance:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.SchemaType.ObjectId,
        ref:"user"
    },
    branchId:{
        type:mongoose.SchemaType.ObjectId,
        ref:"branch"
    },
   
},{
    timestamps:true
})

const Master=mongoose.model("master",masterSchema);

module.exports=Master;