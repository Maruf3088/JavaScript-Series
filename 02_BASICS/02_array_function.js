const arr1 = ["spiderman", "thor", "ironman"];
const arr2 = ["batman", "flash", "superman"];
const arr3 = [1, 2, 3, 4, 5, 6, 7];

arr1.push(arr2);
console.log(arr1);
//output : [ 'spiderman', 'thor', 'ironman', [ 'batman', 'flash', 'superman' ] ]
//it cannot merge two arrayproperly
console.log(arr1[3][1]); //flash
arr1.pop();

//!to merge two array we can use concat function;
let allHeros = arr1.concat(arr2);
console.log(allHeros);
//[ 'spiderman', 'thor', 'ironman', 'batman', 'flash', 'superman' ]
//now it is proper merge

//!to merge two array we have another better way.....use spread function

let allNewHeros = [...arr1, ...arr2, ...arr3]; //use this way to merge two array into one array
console.log(allNewHeros);
//['spiderman', 'thor','ironman','batman','flash','superman',1,2,3,4,5,6,7]
console.log(allNewHeros.length); //13

//!flat() function
let numArr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];
let fixedArr = numArr.flat(Infinity);
console.log(fixedArr); //[ 1,2,3,4,5,6,7,8,9,10,11,12]
