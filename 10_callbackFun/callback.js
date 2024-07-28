//!normal function
function myfun() {
  console.log("hello world");
}
// myfun();
//!arrow function
const arrowFun = () => {
  console.log("arrow function called");
};
// arrowFun();

const arrowFn = () => console.log("Welcome to arrow function");

// arrowFn();
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//!call back function

const calculate = (a, b, operation) => {
  return operation(a, b);
};

function add(num1, num2) {
  return num1 + num2;
}

// !method-1
console.log(calculate(3, 4, add));

// !method-2
const result = calculate(5, 4, function (num1, num2) {
  return num1 - num2;
});
console.log(result);

//!method-3

const mul = (num1, num2) => {
  return num1 * num2;
};

const multiply = calculate(5, 4, mul);
console.log(multiply);

///------------------use of callback function------------------

const arr = [1, 2, 5, 8, 5, 9, -8, 6, -5, 1, 4, 5];

const firstNegetive = (num) => {
  return num < 0;
};

//find
console.log(arr.find(firstNegetive));

const firstNegetiveindex = (num) => {
  return num < 0;
};

//findIndex
console.log(arr.findIndex(firstNegetiveindex));
