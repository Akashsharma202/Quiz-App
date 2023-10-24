const express=require('express');
const router=express.Router();
const Questions=require("../models/Question");

router.get('/',async (req,res)=>{
    try{
        const language=req.query.language;
        const Type=req.query.Type;  
        const Number=req.query.Number;         
        console.log(Number);
        var result;
        if(Number==3){
             result = await Questions.find({ Type: Type,Language:language }).limit(3);
        }
        else{
            if(Type==5){
                 result = await Questions.find({ Type: Type,Language:language }).skip(3).limit(7);
            }
            else{
                const result = await Questions.aggregate([
                    { $match: { Type: Type, Language: language } },
                    { $sample: { size: 7 } }
                  ]);
            }
        }
        res.status(200).json(result);
    }catch(error){
        console.log(error);
        res.status(400).json({error:error});
    }
})
module.exports = router;