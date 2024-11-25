const Email = require('../models/Email'); // Mongoose schema
const processTwitterBio = require('../utils/integrateExtractWebEmail'); // Email extraction logic

const addEmail = async (req, res) => {
  const { fullname, bio } = req.body;

  // Validate input
  if (!fullname || !bio) {
    return res.status(400).json({ message: 'Fullname and bio are required.' });
  }

  try {
    // Extract email and website from bio
    const { email, companyWebsite } = await processTwitterBio({ fullname, bio });

    // Save to database
    const emailEntry = new Email({
      fullname,
      bio,
      companyWebsite,
      email,
    });

    const savedEntry = await emailEntry.save();

    res.status(201).json({
      message: 'Email entry successfully created.',
      data: savedEntry,
    });
  } catch (error) {
    console.error('Error in addEmail:', error.message);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = { addEmail };
