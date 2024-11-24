const axios = require('axios');

const { RAPID_API_KEY } = process.env;


const tweetLikers = async ({postUrl}) => {


    const tweetIdMatch = postUrl.match(/status\/(\d+)/);

if (tweetIdMatch && tweetIdMatch[1]) {
    const tweetId = tweetIdMatch[1];
    console.log("Tweet ID:", tweetId);
} else {
    console.log("Tweet ID not found in the URL");
}


const options = {
  method: 'GET',
  url: 'https://twitter-api49.p.rapidapi.com/getTweetLikers',
  params: {
    tId: tweetId
  },
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': 'twitter-api49.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  return response.data
} catch (error) {
	console.error(error);
}

};

module.exports = tweetLikers