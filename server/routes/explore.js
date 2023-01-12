const express = require('express');
const router = express.Router();
const axios = require("axios");

let explores = []

//Create
router.post("/", async (req,res) => {
    const explore = {
        name: ""
    };
    explores.push(explore);
    res.json(explores.data);
});

module.exports = router;