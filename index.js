console.log("This is nodejs tutorial!");
console.log("we are using nodemon");

//process.exit(0);
// process.exitCode = 1;

// process.on("exit", function (code) {
//   return console.log(`Process to exit with code ${code}`);
// });

const _ = require("lodash");
const arr = [1, 2, 3, 4];
console.log(_.chunk(arr));

const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "I am Dipesh",
    e: "0O",
    t: "U",
  })
);
