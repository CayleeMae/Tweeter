const express = require('express');
const router = express.Router();
const axios = require("axios");

let mores = []

//Create
router.post("/", async (req,res) => {
    const more = {
        name: "Calyn Greene"
    };
    mores.push(more);
    res.json(mores.data);
});

module.exports = router;