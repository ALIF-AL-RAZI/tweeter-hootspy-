import axios from 'axios';


const extractEmail = async ({
    fullname,
    companyDomain,
    companyName,
    settings = {},
  }) => {

const API_KEY = 'a9mmbz30m3ddf391'

const options = {
  method: 'POST',
  url: 'https://api.enrow.io/email/find/single',
  headers: {accept: 'application/json', 'content-type': 'application/json', Authorization: `Bearer ${API_KEY}`, },
  data: {
    fullname: 'string',
    company_domain: 'string',
    company_name: 'string',
    custom: {your_custom_key_name: '"your_custom_property"'},
    settings: {
      webhook: 'string',
      country_code: 'US',
      retrieve_company_info: false,
      retrieve_gender: false
    }
  }
};

try {
    const response = await axios.request(options);
    console.log("Email Found:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    throw error;
  }
  };


  module.exports = extractEmail;
//   npx api install "@enrow/v1.0#a9mmbz30m3ddf391"