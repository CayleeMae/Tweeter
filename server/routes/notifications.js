const express = require('express');
const router = express.Router();
const axios = require("axios");

let notifications = []

//Create
router.post("/", async (req,res) => {
    const notification = {
        title: "new message"
    };
    notifications.push(notification);
    res.json(notifications.data);
});

module.exports = router;