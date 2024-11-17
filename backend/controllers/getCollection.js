const createHttpError = require("http-errors");
const FilteredCollection = require("../models/FilteredCollection");

const getCollection = async (req, res, next) => {
  try {
    const {
      user: { uid },
    } = req;

    // const { exportSaveId } = req.query;

    const filteredCollection =  await FilteredCollection.find({ uid }).exec();

    
    // console.log(leads);
    // console.log(uid);
    res.status(200).json({
      items: filteredCollection,
    });
  } catch (e) {
    next(e);
  }
};
module.exports = getCollection;