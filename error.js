//Error Object
const error = new Error("Something went wrong!");
//console.log(error.stack);
//console.log(error.message);
//throw new Error("I am error object");

const { CustomError } = require("./CustomError");
//throw new CustomError("THis osa custom error object");

//handle exception using try and catch

// try {
//   doSomething();
// } catch (e) {
//   console.log("Error Occurred");
//   console.log(e);
// }

function doSomething() {
  const data = fetch("localhost:300/api");
  console.log("I am from doSomethingFunction");
  //const data = "I am from doSomethingFunction";
  return data;
}

//Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log("There was an uncaught exception", err);
//   process.exit(1);
// });

//Exceptions with promises

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("Error Occurred");
//     console.log(err);
//   });

//Exception with Async and Await

const someFunction = async () => {
  try {
    await doSomething();
  } catch (err) {
    throw new CustomError(err.message);
  }
};

someFunction();
