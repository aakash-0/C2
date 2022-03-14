const express=require("express");

const router=express.Router();

const User=require("../models/user.model");

router.post("",async (req,res)=>{

    try {
        var newUser = await User.create(req.body);
        return res.send({user:newUser});
         
    } catch (error) {
        return res.send.status(401);
    }

})
router.get("",async (req,res)=>{

    try {
        var newUser = await User.find({});
        return res.send({user:newUser});
         
    } catch (error) {
        return res.send.status(401);
    }

})