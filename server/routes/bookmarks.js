const express = require('express');
const router = express.Router();
const axios = require("axios");

let bookmarks = []

//Create
router.post("/", async (req,res) => {
    const newBookmark = {
        title: '',
    };
    bookmarks.push(newBookmark);
    res.json(bookmarks);
});

//Update
router.put("/:id", async (req,res) => {
    const {
        params: { id },
        body: { bookmark },
    } = req;

    bookmarks[id] = {
        title: '',
    }

    res.json({
        msg: "bookmark updates",
        data: bookmarks,
    });
});

//Read
router.get("/", async (req,res) => {
    const bookmark = {
        bookmark: req.body.bookmark,
    }
    bookmarks = bookmark.data;
    res.json(bookmark.data);
});

//Delete
router.delete("/:id", async (req,res) => {
    const {
        params: { id },
        body: { bookmark },
    } = req;

    bookmarks[id] = {
        title: '',
    }

    res.json({
        msg: "bookmark updates",
        data: bookmarks,
    });
});

module.exports = router;