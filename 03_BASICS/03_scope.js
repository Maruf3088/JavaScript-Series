//scope: global scope

//! -> Example : 01
function one() {
  //parent function
  const username = "maruf";

  function two() {
    //child function
    const website = "youtube";
    console.log(username); //username can be accessible
  }
  //   console.log(website);  //it get error cause website cannot be accessible
  two();
}

one();

//!NOTE : child function can be access parent function variable or data ....on the other hand parent function can not be access child variable or data

//! -> Example : 02

if (true) {
  const username2 = "maruf";
  if (username2 === "maruf") {
    const website2 = " channel";
    console.log(username2 + website2);
  }

  //   console.log(website2); //website2 is not accessible cause parent scope cannot be access child scope variable
}

// console.log(username2); // usename2 is not accessible cause username2 is trying to access out of it's scope

//!----------------------------------INTERESTING----------------------------------------

console.log(addOne(5)); //It csn be accessible 

//!decleration of function method one
function addOne(num) {  
  return num + 1;
}

console.log(addOne(5));




// console.log(addTwo(6));// -->it get error cause "Cannot access 'addTwo' before initialization"

//!decleration of function method two
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(6));
