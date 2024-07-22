//!NOTE : for in loop usually used in array, object , map ,string ..... it get error in map...so don't use for in loop in case of map

//!for-in-loop return index or key ***

//!ARRAY
let myArr = [1, 2, 3, 45, 6, 5, 8];
for (const index in myArr) {
  console.log(`index no : ${index} = ${myArr[index]}`);
}
console.log(`the length of the array is ${myArr.length}`);

//!STRING
let myString = "maruf islam";
for (const key in myString) {
  console.log(`index no : ${key} = ${myString[key]}`);
}

//!MAP
/*
const myMap = new Map();
myMap.set("1", "apple");
myMap.set("2", "mango");
myMap.set("3", "banana");
myMap.set("4", "lichi");
for (const [key, value] in myMap) {
  console.log(key, ":-", value); //!it show  nothing . so, don;t use for in loop for map
}
*/


//!OBJECT
const myOBj = {
  name: "maruf islam",
  id: "C233228",
  semster: "3rd",
  university: "IIUC",
  address: "Chittagong",
};

for (const key in myOBj) {
  console.log(`the key is ${key} and the value is ${myOBj[key]}`);
}
