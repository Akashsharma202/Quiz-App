const express = require('express');
const router = express.Router();
const ScoreCard = require('../models/ScoreCard');

router.put('/', async (req, res) => {
    try {
        const language = req.body.language;
        const score = req.body.score;
        const userId = req.body.userId;

        // Use findOne to find a single document, not find
        const check = await ScoreCard.findOne({ UserId: userId }).limit(1).maxTimeMS(15000); // Adjust the timeout as needed
        console.log(typeof language);
        // if (!check) {
        //     return res.status(404).json({ error: 'User not found' });
        // }

        var index = 0;
        if (language === "C") {
            index = 0;
        } else if (language === "C++") {
            index = 1;
        } else if (language == "Java") {
            index = 2;
        } else {
            index = 3;
        }

        // Check if the index is within the valid range
        // if (index < 0 || index >= check.Score.length) {
        //     return res.status(400).json({ error: 'Invalid language' });
        // }

        // Use splice to insert the new score at the specified index
        console.log(check);
        check.Score[index]=score;
        console.log(language,score,userId);
        const result = await check.save();
        // Update the ScoreCard document with the new scores

        res.status(200).json({ result: "ScoreCard updated!! Check your position." });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
