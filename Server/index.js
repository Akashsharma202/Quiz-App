require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const GetQuestions    =require("./routes/GetQuestions.js"); // Make sure to specify the file extension
const GetScoreCard    =require("./routes/GetScoreCard.js"); // Specify the file extension
const GetUserInfo     =require("./routes/GetUserInfo.js"); // Specify the file extension
const PostQuestions   =require("./routes/PostQuestions.js"); // Specify the file extension
const PostUsers       =require("./routes/PostUser.js"); // Specify the file extension
const UpdateScoreCard =require("./routes/UpdateScoreCard.js"); // Specify the file extension
const UploadScoreCard =require("./routes/UploadScoreCard.js"); // Specify the file extension
const app = express();

const uri=process.env.URI;
const PORT=process.env.PORT;
// db connecting
mongoose.connect(uri, {
    useNewUrlParser: true, // Use the new URL parser (avoid deprecation warning)
    useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine (avoid deprecation warning)
  })
  .then(() => {
    console.log(process.env.NODE_ENV);
    console.log("Db is connected");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // to serve images inside public folder
// app.use('/images', express.static('public/images'));

app.use("/question/GetQuestions", GetQuestions); 
app.use("/scorecard/GetScoreCard", GetScoreCard);
app.use("/user/GetUserInfo/", GetUserInfo);
app.use('/question/PostQuestions/', PostQuestions);
app.use("/user/PostUsers/", PostUsers);
app.use('/scorecard/UpdateScoreCard/', UpdateScoreCard);
app.use('/scorecard/UploadScoreCard/', UploadScoreCard);

app.get("/",(req,res)=>{
  res.send("hello");
})
// if(process.env.NODE_ENV=='production'){
//   const path=require('path');
//   app.get('/',(req,res)=>{
//     app.use(express.static(path.resolve(__dirname,'Frontend','build')))
//     res.sendFile(path.resolve(__dirname,'Frontend','build','index.html'))
//   })
// }

app.listen(PORT, () => console.log("Server has been started"));