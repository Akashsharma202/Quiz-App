const mongoose=require('mongoose');
const dataSchema = new mongoose.Schema({
    Language: String, // for particular language
    Question: String, 
    Ans: String,
    Type: Number,    // either 5 or 1 point
    Opt1: String,
    Opt2: String,
    Opt3: String,
    Opt4: String
  });
  const Question = mongoose.model("Question", dataSchema);
  
  module.exports = Question;    