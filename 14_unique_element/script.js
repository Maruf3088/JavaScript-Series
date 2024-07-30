//! how we get unique elements from an array

//!method-1 get ubique element from an array by using filter

const arr = ["apple", "mango", "lichi", "mango", "lichi", "banana"];

const result = arr.filter((val, index, arr) => {
  return arr.indexOf(val) == index;
});

console.log(result);

//!Method - 02 get ubique element from an array by using reduce
const arr2 = ["apple", "mango", "lichi", "mango", "lichi", "banana"];
const tempArr = [];
const result2 = arr2.reduce((acc, element) => {
  if (!acc.includes(element)) {
    acc.push(element);
  }
  return acc;
}, tempArr);
console.log(result2);

// !method-03 get unique element from an array by using set
const arr3 = ["apple", "mango", "lichi", "mango", "lichi", "banana"];

const result3 = [...new Set(arr3)];
console.log(result3);
