const  createCollection  = require("../controllers/createCollection");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = require("express").Router();

router
  .route("/")
  .post(isAuthenticated, createCollection)
module.exports = router;
