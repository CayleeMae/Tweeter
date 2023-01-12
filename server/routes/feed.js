const express = require('express');
const router = express.Router();
const axios = require("axios"); //equilvant to http request

//Create
router.post("/", async (req, res) => {
    res.json({
        hi: "post created",
    });
});

//Update
router.put("/", async (req,res) => {
    res.json({
        hi: "post updated"
    });
});

//Read
router.get("/", async (req, res) => {
    const feeds = await axios.get(
        "https://mpb-site.s3.us-east-2.amazonaws.com/tweeter.json"
    );

    res.json(feeds.data);
});

//Delete
router.delete("/", async (req,res) => {
    res.json({
        hi: "post deleted"
    });
});

module.exports = router; //to be able to use the router in other files
