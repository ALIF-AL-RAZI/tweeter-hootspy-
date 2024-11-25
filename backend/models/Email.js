const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    bio: { type: String, required: true },
    companyWebsite: { type: String },
    email: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Email', emailSchema);
