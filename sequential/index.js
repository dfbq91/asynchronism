/** This is a sequential code. Once taskOne is executed, 
 * we continue with execution of taskTwo. Despite the fact
 * taskOne shows an error, the code is still executed */

const { taskOne, taskTwo } = require("./tasks");

async function main() {
  try {
    console.time("Time measured: ");
    const firstValue = await taskOne();
    const secondValue = await taskTwo();
    console.timeEnd("Time measured: ");
    console.log("Task one returned", firstValue);
    console.log("Task two returned", secondValue);
  } catch (e) {
    console.log(e);
  }
}

main();
