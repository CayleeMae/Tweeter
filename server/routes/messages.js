const express = require('express');
const router = express.Router();
const axios = require("axios");

let messages = []

//Create
router.post("/", async (req,res) => {
    const message = {
        sender: req.body.sender,
        message: req.body.message,
    };
    messages.push(message);
    res.json(messages.data);
});

//Update
router.put("/", async (req,res) => {
    const message = {
        sender: req.body.sender,
        message: req.body.message,
    };
    messages.push(message);
    res.json(messages.data);
});

//Read
router.get("/", async (req,res) => {
    const messages = await axios.get(
        "https://mpb-site.s3.us-east-2.amazonaws.com/tweeter.json"
    );
     res.json(messages.data);
});

//Delete
router.delete("/", async (req,res) => {
    const message = {
        sender: req.body.sender,
        message: req.body.message,
    };
    messages.delete(message);
    res.json(messages.data);
});

module.exports = router;