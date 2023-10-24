const express=require('express');
const router=express.Router();
const User=require("../models/User");

router.get("/",async(req,res)=>{
    try{
      const userId=req.body.userId;
      const result=await User.find({UserId:userId});
      res.status(200).json(result);
    }catch(error){
        res.status(200).json({error:error});
    }
});

module.exports = router;