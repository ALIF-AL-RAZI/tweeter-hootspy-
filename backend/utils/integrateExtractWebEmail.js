const extractWeb = require('./extractWeb');
const extractEmail = require('./extractEmail');

const processTwitterBio = async ({ bio, fullname }) => {
  try {
    // Step 1: Extract Website from Bio
    const companyWebsite = await extractWeb({ bio });

    if (!companyWebsite) {
      console.log('No valid website found in the bio.');
      return { email: null, message: 'No website extracted from bio.' };
    }

    console.log('Extracted Website:', companyWebsite);

    // Step 2: Extract Email using Website and Name
    const emailData = await extractEmail({
      fullname,
      companyDomain: companyWebsite,
      companyName: null, // Optional: Extract company name from bio if needed
    });

    return {
      email: emailData.email || null,
      companyWebsite,
    };
  } catch (error) {
    console.error('Error processing Twitter bio:', error.message);
    return { email: null, message: 'Error occurred during processing.' };
  }
};

module.exports = processTwitterBio;
