// USER MODEL REQUIRES
const { Schema, model } = require("mongoose");
// USER SCHEMA
const userSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: 1,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    accountType: {
      type: String,
      default: "normal", // premium
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "pending", "inactive"],
      required: true,
    },

    clientPrint: {
      type: String,
      select: false,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

// USER MODEL
const User = model("User", userSchema);

// EXPORTS
module.exports = User;
