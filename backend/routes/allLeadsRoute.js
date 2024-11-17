const getAllLeads = require("../controllers/getAllLeads");

const isAuthenticated = require("../middleware/isAuthenticated");

const router = require("express").Router();

router
  .route("/")
  .get(isAuthenticated, getAllLeads);
module.exports = router;