const _ = require("lodash");
const arr = [1, 4, 6, 8];
console.log(_.last(arr));

const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "I am learning NPM module",
    e: "00",
    t: "U",
  })
);

const { tesla, ford } = require("./car");
console.log(JSON.stringify(tesla, null, 3));
console.log(JSON.stringify(ford, undefined, 2));
