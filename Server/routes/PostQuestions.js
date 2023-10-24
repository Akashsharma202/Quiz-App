const express=require("express");
const router=express.Router();
const Questions=require("../models/Question");

router.post("/",async(req,res)=>{
    try{
        const Language=req.body.language;
        const Question=req.body.Question;
        const Ans=req.body.Ans;
        const Type=req.body.Type;
        const Opt1=req.body.Opt1;
        const Opt2=req.body.Opt2;
        const Opt3=req.body.Opt3;
        const Opt4=req.body.Opt4;
        const curr=new Questions({Language,Question,Ans,Type,Opt1,Opt2,Opt3,Opt4});
        console.log(curr);
        await curr.save();
        res.status(200).json("Uploaded Successfully");

    }catch(error){
        res.status(400).json({error:error});
    }
});

module.exports = router;