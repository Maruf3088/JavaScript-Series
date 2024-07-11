//object literals;

let mySymbol = Symbol("key1"); //symbol dicleration

//!--------------------------DECLERATION OF OBJECTS----------------------------
let user = {
  name: "maruf", //string

  age: 18, //number

  [mySymbol]: "key1", //!!IMPORTANT : symbol decleration way but first decler the symbol in line 4
  logedIn: false, //boolean

  email: "imaruf770@gmail.com", //string

  lastLogedInDays: ["Monday", "Saturday"], //array
};

//!--------------------------Access to OBJECT element----------------------------
console.log(user.name); //method-1
console.log(user["name"]); //method-2
console.log(user[mySymbol]); //!!IMPORTANT : only way to print key

//!________________FREEZE FUNCTION__________________

//*after freezing the object ,,you cannot change the value of object element value

// Object.freeze(user); // the way of freeze the object
user.email = "user2024@gmail.com";
console.log(user);

//! function of object decleration
user.greeting = function () {
  console.log("HEELO USER"); //*FUNCTION ONE
};
user.greetingTwo = function () {
  console.log(`Hello ${this.name}`); //*FUNCTION TWO
};

//*print the function
console.log(user.greeting());
console.log(user.greetingTwo());
