const express = require('express');
const router = express.Router();
const axios = require("axios");

let profiles = []

//Create
router.post("/", async (req,res) => {
    const profile = {
        name: "Calyn Greene"
    };
    profiles.push(profile);
    res.json(profiles.data);
});
module.exports = router;