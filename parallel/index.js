/** This is a parallel code. TaskOne and Task two,
 * are executed at the same time. Despite the fact
 * taskOne shows an error, the code is still executed */

const { taskOne, taskTwo } = require("./tasks");

async function main() {
  try {
    console.time("Time measured: ");
    const results = await Promise.all([taskOne(), taskTwo()]); // returns an array
    console.timeEnd("Time measured: ");
    console.log("Task one returned", results[0]); // result of taskOne
    console.log("Task two returned", results[1]); // result of taskTwo
  } catch (e) {
    console.log(e);
  }
}

main();
