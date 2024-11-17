const axios = require("axios");
const sleep = require("../utils/sleep");
// const screenname = "elonmusk";
// const screenname = "zawwadulsami";
const { RAPID_API_KEY } = process.env;
const followerOrFollowing = async ({ screenname, leadType = "followers" }) => {
  if (!["following", "followers"].includes(leadType)) {
    throw new Error(`Invalid leadType!`);
  }
  let url = `https://twitter-api45.p.rapidapi.com/${leadType}.php`;
  const options = {
    method: "GET",
    url,
    params: {
      screenname,
      cursor: "",
      // cursor: "1814704880419207480|1853064249459338193",
    },
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      // "d751730e03msh176398f0fc468acp14ccecjsne56e08f1481a",
      "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
    },
  };
  // console.log(options);
  const loop = Array.from({ length: 5 }).map((_, i) => i + 1);
  let total = 0;
  let datas = [];
  for await (const l of loop) {
    const { data } = await axios.request(options);
    const { followers_count, next_cursor, status, more_users } = data;
    const len = [leadType].length;
    total += len;
    // console.log(options.params, { len, next_cursor, total, followers_count });
    if (next_cursor) {
      if (status !== "failed") {
      }
      options.params.cursor = next_cursor;
      // require("fs").writeFileSync(
      //   `json/${screenname}-tt-${l}.json`,
      //   JSON.stringify(data, null, 2)
      // );
      datas = [...datas, ...(data[leadType] || [])];
    } else {
      break;
    }
    if (status === "failed") {
      await sleep(2000);
    }
  }
  return datas;
  // console.log({ total });
};
module.exports = followerOrFollowing;
// main();

// { total: 4967 }
// { total: 4729 }
// axios
//   .request(options)
//   .then(({ data }) => {
//     // console.log(data);
// require("fs").writeFileSync(
//   `${screenname}-1.json`,
//   JSON.stringify(data, null, 2)
// );
//   })
//   .catch(console.error);
