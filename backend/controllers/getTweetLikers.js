const fetchTweetLikers = require("../utils/tweetLikers")

const twitterLiker = async (req, res, next) => {
    try {
      const {
        // user: { uid },
        body: { postUrl },
      } = req;



      const likers = await fetchTweetLikers({
        postUrl
      });


      res.status(201).json({
        items: likers,
      });


    } catch (e) {
        next(e);
      }

    }


    module.exports = twitterLiker;