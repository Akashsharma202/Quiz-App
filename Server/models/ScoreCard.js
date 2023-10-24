const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
  UserId: String,
  UserName: String,
  Language: Array,
  Score: {
    type:[Number],
    default:[-1,-1,-1,-1]
  }
});
const ScoreCard = mongoose.model("ScoreCard", dataSchema);

module.exports = ScoreCard;