const twitterLiker = require("../controllers/getTweetLikers");

const isAuthenticated = require("../middleware/isAuthenticated");


const router = require("express").Router();

router
  .route("/")
  .post( twitterLiker);
module.exports = router;