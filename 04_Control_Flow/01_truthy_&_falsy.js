//in javascript ,there are truthy and falsy values

//!falsy Values are :
/*
-> false
-> 0
-> -0
-> null
-> undefined
-> NaN
-> BigInt
-> ""
*/

//!Truthy Values are :
/*
-> "0" (string)
-> "false" (string)
-> " " (space in string)
-> [](empty array)
-> {}(empty object)
-> function() (empty function)
*/

const userEmail = "maruf00@google.ai";

if (userEmail) {
  console.log(`got user email`);
} else {
  console.log(`do not got email`);
}

//!_____________________How to check the array is empty-------------------------------

const arr = [];

if (arr.length === 0) {
  console.log(`the length of array is ${arr.length} and the array is empty`);
} else {
  console.log(
    `the length of array is ${arr.length} and the array is not empty`
  );
}

//!_____________________How to check the object is empty-------------------------------

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //!NOTE : Object.keys(emptyObj) -> retrun an array of property of object ...so we can use length property for array
  console.log(`the object is empty`);
} else {
  console.log(`the object is not empty`);
}
