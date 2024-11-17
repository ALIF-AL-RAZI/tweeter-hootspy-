// All REQUIRES
const { Schema, model } = require('mongoose');
// Export Save Model and Schema
const FilteredCollectionSchema = new Schema(
  {
    uid: {
      type: String,
      index: 1,
      required: true,
    },
    filter_name: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },

  }
);
// MODEL
const FilteredCollection = model('FilteredCollection', FilteredCollectionSchema);
// EXPORTS
module.exports = FilteredCollection;