const createHttpError = require("http-errors");
const Lead = require("../models/Lead");
const FilteredLead = require("../models/FilteredLead");
const FilteredCollection = require("../models/FilteredCollection");
const extractWeb = require("../utils/extractWeb");

const createCollection = async (req, res, next) => {
    try {
        const {
            user: { uid },
            body: { filter_name, selectedLeads },
        } = req;

        console.log("Selected Leads:", selectedLeads);

        // Step 1: Create a new FilteredCollection
        const filteredCollection = await FilteredCollection.create({
            uid,
            filter_name,
        });

        console.log("FilteredCollection created:", filteredCollection);

        // Step 2: Retrieve leads to process
        const leadsToCopy = await Lead.find({ _id: { $in: selectedLeads } });
        if (leadsToCopy.length === 0) {
            return res.status(404).json({ error: "No matching leads found." });
        }

        console.log("Leads to process:", leadsToCopy);

        // Step 3: Process each lead to ensure a website is available
        const filteredLeadsData = [];
        for (const lead of leadsToCopy) {
            let { website, description } = lead.toObject();

            // If no website exists, try to extract it using extractWeb
            if (!website) {
                console.log(`Extracting website for lead ID: ${lead._id}`);
                website = await extractWeb({ bio: description });
            }

            filteredLeadsData.push({
                ...lead.toObject(), // Copy all lead fields
                website, // Add or update website
                FilteredCollectionId: filteredCollection._id, // Add FilteredCollectionId
            });
        }

        // Step 4: Insert the processed leads into FilteredLead collection
        await FilteredLead.insertMany(filteredLeadsData);

        console.log("Leads successfully duplicated to FilteredLead.");

        // Respond with success
        res.status(201).json({
            message: "FilteredCollection created and leads updated successfully.",
            filteredCollection,
        });

    } catch (error) {
        console.error("Error in createCollection:", error);
        next(error);
    }
};

module.exports = createCollection;
