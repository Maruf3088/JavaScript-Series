//!_------------------DATES---------------

let myDate = new Date(); //to know today date use date() function
console.log(myDate); //2024-07-11T04:27:40.848Z
console.log(myDate.toString()); //Thu Jul 11 2024 10:06:44 GMT+0600 (Bangladesh Standard Time)
console.log(myDate.toDateString()); //Thu Jul 11 2024
console.log(myDate.toLocaleString()); //7/11/2024, 10:07:34 AM

console.log(typeof myDate); //object

//!-----------------DECLERATION OF DATES--------------------------

// let myName = "Maruf Islam"
// console.log(`my name is ${myName}`);
//*METHOD_01
let myCreatedDate = new Date(2023, 0, 24); // year , january[index-0] , date
console.log(`my created date is ${myCreatedDate.toDateString()}`);

//*METHOD_02
let myCreatedDate1 = new Date(2023, 0, 24, 5, 3, 2); // year , january[index-0] , date ,hour,minuete,second
console.log(`my created date is ${myCreatedDate1.toLocaleString()}`);

//*METHOD_03
let myCreatedDate2 = new Date("01-23-2024"); //month-date-year//here month starts from 1 as usual
console.log(`Today date is ${myCreatedDate2.toDateString()}`);

//!________________________TIME-STAMP______________________________
let myTimeStamp = Date.now(); //to get time stamp of today date ..than use Date.now() function.
console.log(myTimeStamp); //1720677948388->milisecond of from 1 jan 1970 to today date;

console.log(
  `time stamp of my created date in milisecond is ${myCreatedDate2.getTime()}`
); //to get stamp time than use getTime() function

//*to convert milisecond to second than value devide by 1000...and then take floor value;
console.log(
  `time stamp of my created date in second is ${Math.floor(
    myCreatedDate2.getTime() / 1000
  )} Seconds`
);

//!------------------EXTRA_FUNCTION_________________________
let todayDate = new Date();
console.log(`today is ${todayDate.getDay()}`); //4->today is thusday
/*
monday->1
thuesday->2
wednessday->3
thusday->4
friday->5
saturday->6
sunday ->7
*/
console.log(todayDate.getMonth()); //to get proper month use ->todayDate.getmonth()+1
/*
january ->0
February ->1
march ->2
april ->3
may ->4
..... -> ....
december -> 11
*/
//!------------------EXTRA_MORE_FUNCTION_________________________
todayDate.toLocaleString("default", {
  weekday: "long",
  day: "2-digit",
  //and so more....
});//you can customize the property of tolocalstring like this 

console.log(todayDate.toLocaleString());
