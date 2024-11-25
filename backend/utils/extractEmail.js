import axios from 'axios';

const extractEmail = async ({
  fullname, // Full name (e.g., Twitter display name or handle)
  companyDomain, // Extracted from extractWeb
  companyName, // Optional, extracted from extractWeb
  settings = {}, // Additional optional settings for the Enrow API
}) => {
  const API_KEY = 'a9mmbz30m3ddf391'; // Enrow API Key

  const options = {
    method: 'POST',
    url: 'https://api.enrow.io/email/find/single',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    data: {
      fullname,
      company_domain: companyDomain,
      company_name: companyName,
      custom: { your_custom_key_name: 'your_custom_property' },
      settings: {
        ...settings, // Use settings if provided, or use defaults
        country_code: 'US',
        retrieve_company_info: false,
        retrieve_gender: false,
      },
    },
  };

  try {
    const response = await axios.request(options);
    console.log('Email Found:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default extractEmail;
