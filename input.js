const readline = require("readline");
const prompt = require("prompt-sync")();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question(`What is your name ?`, (name) => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });

const age = prompt("what is your age ?");
console.log("My age is %d", age);
process.exit(0);
