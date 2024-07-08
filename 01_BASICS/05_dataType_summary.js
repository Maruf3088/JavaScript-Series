//there are two types of data type :

//   01_primitive data type:
//   02_nonprimitive data type or reference data type

/*
* 01_primitive data type:(call by value)
 7 Types : String, Number, Null, Undefined,Boolean ,Symble , Bigint 
 !Note :they all are call by value
*/
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //output false

/*
* 02_nonprimitive data type:(call by reference)
 3 Types : Array , objects , Functions 
 !Note :they all are call by reference
*/

//Array

const heros = ["superman", "batman", "spiderman"];

//objects

const myObject = {
  name: "maruf",
  age: 18,
};

//funtions

const myFuntion = function () {
  console.log("Hello World");
  return 1
};
console.log(myFuntion()); //calling the function