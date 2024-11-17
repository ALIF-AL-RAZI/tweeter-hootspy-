const sleep = (s = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, s);
  });

module.exports = sleep;
