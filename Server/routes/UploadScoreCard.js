const express = require("express");
const router = express.Router();
const ScoreCard = require("../models/ScoreCard");


router.post('/', async (req, res) => {
    try {
        // console.log(req.body);
        const UserId = req.body.UserId;
        const UserName = req.body.UserName;
        const language=["","","",""];
        const score = [-1,-1,-1,-1];
        const result = new ScoreCard({ UserId, UserName, language, score });
        await result.save();

        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Error uploading file' });
    }
});

module.exports = router;