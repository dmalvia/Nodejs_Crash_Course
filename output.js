const chalk = require("chalk");
const x = "x";
const y = "y";

//console.log(x, y);

//%s format a variable as a string
//%d format a variable as a number
//%i format a variable as a integer part only
//%o format a variable as a object
//console.log("My %s has %d ears", "cat", 2);

//console.log("%o", Number);

//console.clear();

// console.count("I am Dipesh");
// console.count("I am Dipesh");
// console.count("I am Dipesh");
// console.count("I am Nikesh");

// const oranges = ["orange", "orange"];
// const apples = ["just one apple"];
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });

// console.countReset("orange");
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });
// apples.forEach((fruit) => {
//   console.count(fruit);
// });

//Print the stack trace
// const function2 = () => console.trace();
// const function1 = () => function2();
// function1();

//Calculate time spent
const sum = () => console.log(`The sum of 2 and 3 is: ${2 + 3}`);
const multiply = () =>
  //console.log("\x1b[33m%s\x1b[0m", `The Multipication is: ${100000 + 35678}`);
  console.log(chalk.blue(`The Multipication is: ${100000 + 35678}`));

const measureTime = () => {
  console.time("sum()");
  //exceute sum(), and measure the time it takes
  sum();
  console.timeEnd("sum()");

  console.time("multiply()");
  //exceute multiply(), and measure the time it takes
  multiply();
  console.timeEnd("multiply()");
};

measureTime();

//create a progress bar in console
const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
  total: 20,
});
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
