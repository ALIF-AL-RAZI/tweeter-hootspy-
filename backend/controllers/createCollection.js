const createHttpError = require("http-errors");
const Lead = require("../models/Lead");
const FilteredLead = require("../models/FilteredLead");
const FilteredCollection = require("../models/FilteredCollection");


const createCollection = async (req, res, next) => {
    try {
        const {
            user: { uid },
            body: { filter_name, selectedLeads },
          } = req;

          console.log(selectedLeads)



          const filteredCollection = await FilteredCollection.create({
            uid,
            filter_name,
          });

          console.log("FilteredCollection created:", filteredCollection);
          console.log(selectedLeads)

        //   await Lead.updateMany(
        //     { _id: { $in: selectedLeads } }, // Find leads with _id in the selectedLeads array
        //     { $set: { FilteredCollectionId: filteredCollection._id } } // Set FilteredCollectionId
        //   );
      


        const leadsToCopy = await Lead.find({ _id: { $in: selectedLeads } });
        if (leadsToCopy.length === 0) {
            return res.status(404).json({ error: "No matching leads found." });
        }

        console.log("Leads to copy:", leadsToCopy);

        // Step 3: Duplicate leads into FilteredLead schema with added FilteredCollectionId
        const filteredLeadsData = leadsToCopy.map((lead) => ({
            ...lead.toObject(), // Copy all lead fields
            FilteredCollectionId: filteredCollection._id, // Add the FilteredCollectionId
        }));

        // Insert the duplicated leads into FilteredLead collection
        await FilteredLead.insertMany(filteredLeadsData);

        console.log("Leads successfully duplicated to FilteredLead.");



          res.status(201).json({
            message: "FilteredCollection created and leads updated successfully.",
            filteredCollection,
          });



    } catch (error) {
        next(error);
    }
}


module.exports = createCollection;