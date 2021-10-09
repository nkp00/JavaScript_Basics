// function square(number) {
//   return number * number;
// }

// var square = (number) => {
//   return number * number;
// };

// var a = "Meetali";
// console.log(square(5));
// var callback = (a) => {
//   console.log("ha " + a + ",Ham aise v kr skte h");
//   return 5;
// };

// var a = "neha";

// setTimeout(() => {
//   callback("abcdef");
// }, 1000);

// setTimeout(callback, 1000, "xyz");

// console.log("eske baad");
// console.log(callback("neha"));

// function print(numberToPrint) {
//   console.log(numberToPrint);
// }

// console.log(numberToPrint);
// print(20);
// console.log(numberToPrint);
// function setTimeoutMeraWala(a, nkp) {
//   for (i = 1; i < a * 1000000; i++) {}
//   nkp();
// }

// function abc() {
//   console.log("Etna time bad print hua");
// }

// setTimeoutMeraWala(100, abc);

// function sum(num1, callback) {
//   var num = num1 + 5;
//   // for (let i = 0; i < 1000000000; i++) {} api data from api
//   callback(num);
// }

// sum(1000, (num) => {
//   console.log(num);
// });
// console.log("Yes it is done");

// const axios form 'axios'

const fs = require("fs");
// const axios = require("axios");
// fs.readFile("./text.txt", { encoding: "utf8" }, (err, data) => {
//   console.log("");
//   console.log(data);
// });
// console.log("file read ho gayay");

// axios.get("https://localhost:3000", (response, err) => {
//   console.log(response);
//   console.log(err);
// });

// fetch("https://jsonplaceholder.typicode.com/posts").then((value) => {
//   console.log(value);
// });

// axios.get("https://localhost:3000")
//   .then((value) => console.log("value", value))
//   .catch((err) => console.log(err));

// Promises

let a = "simran";

const p1 = new Promise((resolve, reject) => {
  if (a == "simran") resolve("Ja Simran ja Jile apni Jindagi");
  else {
    reject("Yes it is rejected");
  }
});

p1.then((value) => {
  console.log(value);
})
  .then((value) => {
    console.log("kuch mila", value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("mujhe response mila neeraj dekh lo");
  });

// const p2 = Promise.resolve("I am a simplified versionss");
// p2.then((value) => console.log(value));

// const p2 = Promise.reject("I am rejected");
// p2.catch((value) => console.log(value));

// const Max = 50;
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 2000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("resolved dusra");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Resolved Tisra");
//   }, 3000);
// });

// p1.then((neha) => {
//   console.log(neha);
//   return "hello " + neha;
// });

// function abcd() {
//   console.log("Somehitng");
//   return 5;
// }

// console.log(abcd());

// Date 02/10/2021
// Promises

// Promise.any([p1, p2]).then((val) => {
//   console.log(val);
// });s

// const p1 = Promise.reject("Rejected");
// const p2 = new Promise((resolve) => setTimeout(resolve, 500, "quick"));
// const p3 = new Promise((a, resolve) => setTimeout(a, 5000, "slow"));

// Promise.race([p2, p3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((val) => {
//     console.log(val);
//   });

// promise2.then((value) => console.log(value));

// const promises = [promise1, promise2, promise3];

// Promise.any([p1, p2, p3]).then((value) => console.log(value));

// const p3 = new Promise((resolve, reject) => {
//   resolve("done");
// });

// p3.then((value) => console.log(value));
// console.log("After done");

// p1.then((value) => console.log(value)).catch((err) => console.log(err));
// p2.then((value) => console.log(value)).catch((err) => console.log(err));

// Promise.all([p1, p2, p3])
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("sbke baad");
//   });
// console.log("Yes We will learn promises and master it");
// var fn = (name) => console.log(name + " is learning set time out");

// setTimeout(fn, 2000, "Rita");

// function abc(name) {
//   console.log(name);
// }

// abc();

var a = "I am learning git";
var b = "I am not new branch Rita";
