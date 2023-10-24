const mongoose=require('mongoose');
const dataSchema = new mongoose.Schema({
    UserId: String,  //userId same as Firebase Id
    UserName: String,
    Score:Array
  });
  const User = mongoose.model("user", dataSchema);
  
  module.exports = User;