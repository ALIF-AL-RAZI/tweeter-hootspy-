require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDBURI = process.env.DB_CONNECTION_URL;

module.exports = () => {
  console.log("Trying to connect wiht mongodb...");
  return mongoose.connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
