// Lead MODEL REQUIRES
const { Schema, model } = require("mongoose");
const ExportSave = require("./ExportSave");
// const FilteredCollection = require("./FilteredCollection");
const { required } = require("joi");
// Lead SCHEMA
const filteredleadSchema = new Schema(
  {
    uid: {
      type: String,
      index: 1,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    screen_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    profile_image: {
      type: String,
    },
    statuses_count: {
      type: Number,
      required: true,
    },
    followers_count: {
      type: Number,
      required: true,
      index: 1,
    },
    friends_count: {
      type: Number,
      required: true,
      index: 1,
    },
    media_count: {
      type: Number,
      required: true,
    },
    // "created_at":
    location: {
      type: String,
    },
    blue_verified: {
      type: Boolean,
      // required: true,
    },
    website: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    exportSaveId: {
      type: Schema.Types.ObjectId,
      ref: "ExportSave",
      required: true,
    },
    FilteredCollectionId: {
      type: Schema.Types.ObjectId,
      ref: "FilteredCollection",
      required: true,
    }
  },
  {
    strict: false,
  }
);

// USER MODEL
const FilteredLead = model("FilteredLead", filteredleadSchema);

// EXPORTS
module.exports = FilteredLead;
