//!NOTE: for of loop is usually used for array , string, map ,etc..it get error in object...so, in case of object use for in loop or for each loop

//!for of loop return value

//!ARRAY
const myArr = [1, 2, 3, 4, 5];
for (const num of myArr) {
  console.log(num);
}

//!STRING
const string = "maruf islam";
for (const key of string) {
  console.log(key);
}

//!MAP
const myMap = new Map();
myMap.set("js", "javaScript");
myMap.set("cpp", "c++");

for (const [key, value] of myMap) {
  console.log(`the key is ${key} : the value is ${value}`);
}

//!OBJECT
const myOBj = {
  name: "maruf islam",
  id: "C233228",
  semster: "3rd",
  university: "IIUC",
  address: "Chittagong",
};

for (const [item, value] of myOBj) {
  //it get error " myOBj is not iterable"
  console.log(item, value);
}
