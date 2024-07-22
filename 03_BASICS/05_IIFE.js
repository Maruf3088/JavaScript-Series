//!IIFE : Immediately Invoked Function Expressions


//normal function without IIFE
function chai() {
  console.log(`Db Connected`);
}
chai();


//!IIFE example-01
//named IIFE which function has name
(function chai2() {
  console.log(`db connected`);
})(); //immediately called function in line


//!IIFE example-02
//IIFE in arrow function which function has name
(arrowFn = () => {
  console.log("Welcome to arrow function");
})();


//!IIFE example-03
//IIFE in arrow function which function do not have name
(() => {
  //arrow function without name
  console.log(`db2 connected`);
})();


//!IIFE example-04
//IIFE in arrow function without name and with perameter
((name) => {
  console.log(`${name},welcome to IIFE`);
})("Maruf"); //Maruf,welcome to IIFE
