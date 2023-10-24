const express=require('express');
const router=express.Router();
const User=require("../models/User");

router.post("/",async(req,res)=>{
    try{
       const UserId=req.body.UserId;
    //    console.log(UserId);
       const UserName=req.body.UserName;
       const arr=[0,0,0,0];
       const curr=new User({UserId,UserName,arr});
       await curr.save();
       res.status(200).json({success:"Done"});
    }catch(error){
        res.status(400).json({error:error});
    }
});

module.exports = router;