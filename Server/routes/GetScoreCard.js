const express=require('express');
const router=express.Router();
const ScoreCard=require("../models/ScoreCard");

router.get("/",async(req,res)=>{
    try{
      const language=req.query.language; 
      var index;
      if (language === "C") {
         index = 0;
     } else if (language === "C++") {
         index = 1;
     } else if (language == "Java") {
         index = 2;
     } else {
         index = 3;
     }
     const result = await ScoreCard.find({
      [`Score.${index}`]: { $ne: -1 }
    }).sort({ [`Score.${index}`]: -1 });
       res.status(200).json(result);
    }catch(err){
      console.log(err)
       res.status(400).json({error:err});
    }
});

module.exports = router;