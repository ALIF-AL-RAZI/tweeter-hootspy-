const  createCollection  = require("../controllers/createCollection");
const  getCollection  = require("../controllers/getCollection");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = require("express").Router();

router
  .route("/")
  .get(isAuthenticated, getCollection)
  .post(isAuthenticated, createCollection)
module.exports = router;
