//!______________DECLAREING ARRAY_____________________

//*->METHOD_1
const myArr = [1, 2, 3, 4, 5, 6, 7];
console.log(myArr[0]);
const myHeros = ["spiderman", "superman", "batman"];

//*->METHOD_2
const myArr2 = new Array(1, 2, 3, 4);

//!______________ARRAY_METHODS_____________________

//!______________push()_METHOD_____________________

const myNewArray = [];
//push()method
myNewArray.push(2); //you can push like that
myNewArray.push(3, 4, 5, 6); //you can push like that also
console.log(myNewArray);

//!______________pop()_METHOD_____________________
myNewArray.pop(); //pop function remove last element from array
console.log(myNewArray);

//!______________unShift()_METHOD_____________________

myNewArray.unshift(9); //it insert value in first of the array
console.log(myNewArray);

//!______________Shift()_METHOD_____________________

myNewArray.shift(); //it remove elements from first ...but pop remove element from last
console.log(myNewArray);

//!______________includes()_METHOD_____________________
console.log(myNewArray.includes(9)); //it checks is there 9 in this array..if yes than it returns true otherwise false

//!______________indexof()_METHOD_____________________
console.log(myNewArray.indexOf(9)); //-1->using indexof function we can get the index of that element ...if the value of that perameter are not in array than it return -1

//!______________join()_METHOD_____________________
let myNewArray2 = myNewArray.join(); //it convert the array into a string

console.log(myNewArray2);
console.log(typeof myNewArray2);

//!______________slice and splice method difference_____________________

console.log(`---------------Slice the array-------------`);

const myArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(`original Array before slicing : ${myArr1}`);

let tempArr = myArr1.slice(1, 4); //it give you a slice of array elements from index 1 to index 3
console.log(`sliced array is : ${tempArr}`);
console.log(`original Array after slicing : ${myArr1}`); //slice method cannot remove element from the original array;

console.log(`---------------Now Splice the array-------------`);

console.log(`original Array before splicing : ${myArr1}`);
let tempArr1 = myArr1.splice(1, 4); //it splice elements from index 1 and delete 4 items including index-1 element
console.log(`spliced Array : ${tempArr1}`);
console.log(`original Array after splicing : ${myArr1}`); //splice method can remove elements of spliced array but slice method cannot do that ..and that is the major difference of slice and spice

//!splice function can replace items in array;

let tempArr2 = [2, 4, 1, 6, 7, 8, 4];
let splicedArr = tempArr2.splice(2,3,"maruf","islam","from","bangladesh");
console.log(splicedArr);
console.log(tempArr2);
console.log(tempArr2.length);


