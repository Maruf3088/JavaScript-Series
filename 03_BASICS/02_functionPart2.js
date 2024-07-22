//!-----------pass and get acceess multiple perameter in function
function calculateCartPrices(...num1) {
  return num1;
}
//*now you can pass unlimited perameter in function
console.log(calculateCartPrices(100, 200, 300)); //*[ 100, 200, 300 ]

//!_________________object pass as perameter in function____________________________
const myobj = {
  username: "Maruf",
  age: 18,
};

function handleObj(tempObj) {
  return `your name is ${tempObj.username} and you are ${tempObj.age} years old`;
}

console.log(handleObj(myobj));
console.log(handleObj({ username: "hitesh", age: 19 })); ///you can pass argument also like this

//!____________________pass array as perameter in function _______________

const myArrr = [3, 5, 2, 3, 5, 8, 6, 9];

function getSecondelement(tempArr) {
  console.log(`second element of the array is ${tempArr[1]}`);
}
getSecondelement(myArrr)
getSecondelement([200,300,400,500])///you can pass argument also like this