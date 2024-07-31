console.log("hello world");

//!setTimeOut

//Method-1
const timer = setTimeout(() => {
  console.log("hello world after 3 second");
}, 3000);

//!ClearTimeOut
clearTimeout(timer);

const outerFn = (num) => {
  console.log(`the Value of number is ${num}`);
};

//Method-2
const timer2 = setTimeout(function () {
  outerFn(5), 3000;
});

//!SetInterval
const interval = setInterval(() => {
  const time = new Date();
  console.log(time.toLocaleTimeString());
}, 1000);

//!ClearInterval
clearInterval(interval);
