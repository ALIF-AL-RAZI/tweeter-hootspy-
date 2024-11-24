const axios = require('axios');
const { RAPID_API_KEY } = process.env;
const fetchTweetLikers = async ({postUrl}) => {
  const tweetIdMatch = postUrl.match(/status\/(\d+)/);

  if (!tweetIdMatch || !tweetIdMatch[1]) {
    console.error("Invalid tweet URL");
    return;
  }

  const tweetId = tweetIdMatch[1];

  const options = {
    method: 'GET',
    url: 'https://twitter-api45.p.rapidapi.com/tweet.php',
    params: { tId: tweetId },
    headers: {
      'x-rapidapi-key': "d751730e03msh176398f0fc468acp14ccecjsne56e08f1481a",// Exposed in client-side
      'x-rapidapi-host': 'twitter-api45.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};



module.exports = fetchTweetLikers;