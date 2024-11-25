// const express = require('express');
const { addEmail } = require('../controllers/extractEmailController');
const isAuthenticated = require("../middleware/isAuthenticated");
const router = express.Router();

router
.route("/")
.post(isAuthenticated, addEmail);

module.exports = router;
