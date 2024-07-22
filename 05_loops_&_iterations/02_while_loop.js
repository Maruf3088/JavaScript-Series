//!----------------------------------While loop------------------------------------------
//syntex:
/*
while (condition) {
    
}
*/
//!-----------------------------------Print 0 to 10--------------------------------
let index = 0;
while (index <= 10) {
  console.log(`value of index : ${index}`);
  index++;
}
//!-----------------------array using while loop----------------------------

let myArray = ["superman", "batman", "flash", "antman"];
let index2 = 0;
while (index2 < myArray.length) {
  console.log(myArray[index2]);
  index2++;
}

//!---------------------------------do while loop------------------------------
//syntex :
/*
do {
    
} while (condition);
*/

let score = 0;
do {
  console.log(`score is : ${score}`);
  score++;
} while (score <= 10);
