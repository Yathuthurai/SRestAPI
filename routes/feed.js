const express = require("express");

const feedController = require("../controllers/feed");

const router = express.Router();

// GET /feed/posts
router.get("/posts", feedController.getPosts);

router.post("/posts", feedController.postPost);

module.exports = router;
