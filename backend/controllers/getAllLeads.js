const createHttpError = require("http-errors");
const ExportSave = require("../models/ExportSave");

const getAllLeads = async (req, res, next) => {
  try {
    const {
      user: { uid },
    } = req;

    const allLeads = await ExportSave.find({ uid }).exec();
    console.log(allLeads);
    console.log(uid);
    res.status(200).json({
      items: allLeads,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = getAllLeads;