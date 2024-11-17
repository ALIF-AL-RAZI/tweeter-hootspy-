const createHttpError = require("http-errors");
const Lead = require("../models/Lead");

const getAllItems = async (req, res, next) => {
  try {
    const {
      user: { uid },
    } = req;

    const { exportSaveId } = req.query;

    const leads = exportSaveId
    ? await Lead.find({ exportSaveId }).exec()
    : await Lead.find({ uid }).exec();

    
    console.log(leads);
    console.log(uid);
    res.status(200).json({
      items: leads,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = getAllItems;
