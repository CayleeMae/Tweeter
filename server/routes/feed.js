const express = require('express');
const router = express.Router();
const axios = require("axios"); //equilvant to http request

let feeds = [];

//Create
router.post("/", async (req, res) => {
    const newTweet = {
        name: 'CayleeMae',
        handler: '@SunShinee',
        title: req.body.tweet,
        profileImg: "",
        tweetImg: "",
    }
    feeds.push(newTweet);
    res.json(feeds);
});

//Update
router.put("/:id", async (req,res) => {
    const { 
        params: { id },              //destructing "grab all",pulling properties off an object. Grab this id off the request 
        body: { tweet },             //the same as const id = req.params.id   
    } = req; 

    feeds[id] = {
        name: 'CayleeMae',
        handler: '@SunShinee',
        title: req.body.tweet,
        profileImg: "",
        tweetImg: "",
    }

    res.json({
        msg: "tweet updated",
        data: feeds,
    });
});

//Read
router.get("/", async (req, res) => {
    const tweeterData = await axios.get(
        "https://mpb-site.s3.us-east-2.amazonaws.com/tweeter.json"
    );
    feeds = tweeterData.data;
    res.json(tweeterData.data);
});

//Delete
router.delete("/:id", async (req,res) => {
    const { 
        params: { id },              
        body: { tweet },             
    } = req; 

    feeds[id] = {
        name: 'CayleeMae',
        handler: '@SunShinee',
        title: req.body.tweet,
        profileImg: "",
        tweetImg: "",
    }
    res.json({
        msg: "tweet deleted",
        data: feeds,
    });
});

module.exports = router; //to be able to use the router in other files
