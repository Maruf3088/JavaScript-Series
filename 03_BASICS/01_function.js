//!__________________________function decleration________________________________
function myFun() {
  //*->function without perameter
  console.log("Hello World");
}
myFun(); //call the function

//!--------------------------------------------------------------------------------
function addTwoNum(num1, num2) {
  //*->function with perameter
  console.log(`the total of num1 and num2 is ${num1 + num2}`);
}
addTwoNum(2, 3);

//!_---------------------------------------------------------------------------------
function addTwoNum2(num1, num2) {
  //*->function with return
  const result = num1 + num2;
  return result;
}
const result = addTwoNum2(3, 4);
console.log(result);

//!------------------Another Function-------------------------------------

function logInMassage(username) {

  if (username === undefined) {
    //if(!username) also work
    console.log(`Please enter a Username`);
    return;
  }

  return `${username} just Loged In`;
}

console.log(logInMassage());
