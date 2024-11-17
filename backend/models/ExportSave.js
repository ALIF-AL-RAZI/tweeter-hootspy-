// All REQUIRES
const { Schema, model } = require('mongoose');
// Export Save Model and Schema
const exportSaveSchema = new Schema(
  {
    uid: {
      type: String,
      index: 1,
      required: true,
    },
    screen_name: {
      type: String,
      required: true,
    },

    lead_type: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },


  //   searchedByUID: {
  //     type: String,
  //     required: true,
  //   },
  //   searchedByScreenName: {
  //     type: String,
  //     required: true,
  //   },
  //   exportName: {
  //     type: String,
  //     required: true,
  //   },
  //   fullName: {
  //     type: String,
  //     required: true,
  //   },
  //   screenAPI: {
  //     type: String,
  //     required: true,
  //   },
  //   profileIMG: {
  //     type: String,
  //     required: true,
  //   },
  //   twitterIDSTR: {
  //     type: String,
  //     required: true,
  //   },
  //   description: {
  //     type: String,
  //   },
  //   address: {
  //     type: String,
  //   },
  //   followersCount: {
  //     type: Number,
  //     required: true,
  //   },
  //   followingCount: {
  //     type: Number,
  //     required: true,
  //   },
  //   favouritesCount: {
  //     type: Number,
  //     required: true,
  //   },
  //   tweetCount: {
  //     type: Number,
  //     required: true,
  //   },
  //   exportSelectedCredit: {
  //     type: Number,
  //     required: true,
  //   },
  //   followers: {
  //     type: Array,
  //     required: true,
  //   },
  //   followersDataFetched: {
  //     type: Boolean,
  //     required: true,
  //   },
  //   importType: {
  //     type: String,
  //     required: true
  //   }
  // },
  // {
  //   timestamps: true,
  //   collection: 'saved_Exports',
  // }
  }
);
// MODEL
const ExportSave = model('ExportSave', exportSaveSchema);
// EXPORTS
module.exports = ExportSave;