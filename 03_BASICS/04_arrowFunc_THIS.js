//!->ARROW FUNCTION AND THIS KEYWORD

//this refers current context

const user = {
  username: "maruf",
  price: 333,
  welcome: function () {
    console.log(`${this.username}, Welcome to my website`);
    // console.log(this); // it print current context
  },
};

user.welcome();
user.username = "sam";
user.welcome();

// console.log(this); //it print current context which is empty

//!____________________________ARROW FUNCTION___________________________________

//!EXAMPLE_01
function chai() {
  const username2 = "maruf";
  // console.log(this.username2); //undefined-->this function works only in object
  // console.log(this); // it returns so many values not current context cause this function is properly used in object not in function
}
chai();

//!EXAMPLE_02
//variable function
const chai2 = function () {
  const username2 = "maruf";
  console.log(this.username2); //undefined-->this function works only in object
};
chai2();

//!EXAMPLE_03
//Arrow function
const chai3 = () => {
  let usernmae = "maruf";
  console.log(this.usernmae); //undefined-->this function works only in object
};
chai3();

//!EXAMPLE_04
//pure arrow function

//syntex : ()=>{}
const addThree = (num1, num2) => {
  return num1 + num2; //exclusive return
};
console.log(addThree(2, 3));

//implicit return num
const addfour = (num1, num2) => num1 * num2;
console.log(addfour(10, 2));

//implicit return object
const returnObj = () => ({ username: "maruf" });

console.log(returnObj());//{ username: 'maruf' }
