const createHttpError = require("http-errors");
const Lead = require("../models/Lead");
const ExportSave = require("../models/ExportSave");
const followerOrFollowing = require("../services/followerOrFollowing");

const mapping = ({ uid, datas = [] }) => {
  return datas.map((item) => ({ ...item, uid }));
};

const leadCollectByUsername = async (req, res, next) => {
  try {
    const {
      user: { uid },
      body: { screenname, leadType },
    } = req;

    // Step 1: Create ExportSave document
    const exportSave = await ExportSave.create({
      uid,
      screen_name: screenname,
      lead_type: leadType,
    });

    console.log("ExportSave created:", exportSave);

    // Step 2: Call followerOrFollowing function
    const leadCollect = await followerOrFollowing({
      screenname,
      leadType,
    });
    const mapped = mapping({ uid, datas: leadCollect });

    // Step 3: Add exportSaveId to each lead and save them to Lead collection
    const leads = await Lead.insertMany(mapped.map((lead) => ({
      ...lead,
      exportSaveId: exportSave._id, // Store the ExportSave _id here
    })));

    res.status(201).json({
      items: leads,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = leadCollectByUsername;
