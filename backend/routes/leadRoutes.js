const  createItem  = require("../controllers/createItem");
const  getAllItems  = require("../controllers/getAllItems");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = require("express").Router();

router
  .route("/")
  .post(isAuthenticated, createItem)
  .get(isAuthenticated, getAllItems);
module.exports = router;
