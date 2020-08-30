const util = require("util");
const sleep = util.promisify(setTimeout);

module.exports = {
  async taskOne() {
    try {
      throw new Error("This is an error");
      await sleep(4000);
      return "One value";
    } catch (e) {
      console.log(e);
    }
  },
  async taskTwo() {
    try {
      await sleep(2000);
      return "Another value";
    } catch (e) {
      console.log(e);
    }
  },
};
