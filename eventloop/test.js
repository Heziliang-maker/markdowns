// async function async1() {
//   console.log("=>", "async1 start");
//   await async2();
//   console.log("=>", "async1 end ");
// }

// async function async2() {
//   console.log("=>", "async2 start");
// }

// console.log("script start");
// setTimeout(() => {
//   console.log("=>", "setTimeout");
// });
// async1();
// new Promise((resolve) => {
//   console.log("=>", "promise1");
//   resolve();
// }).then(() => {
//   console.log("=>", "promise2");
// });

// console.log("=>", "script end");
// async function async1() {
//   console.log("=>", "async1 start");
//   await async2();
//   console.log("=>", "async1 end");
// }

// async function async2() {
//   return new Promise((resolve) => {
//     console.log("=>", "async2 start");
//     resolve();
//   }).then(() => {
//     console.log("=>", "promise3");
//   });
// }

// async1();

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  //async2做出如下更改：
  return new Promise(function(resolve) {
    console.log("promise1");
    resolve();
  }).then(function() {
    console.log("promise2");
  });
}

console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
  console.log("promise3");
  resolve();
}).then(function() {
  console.log("promise4");
});

console.log("script end");

/*
async1 start
promise1
promise3
script end
promise2
promise4
async1 end
setTimeout
*/
