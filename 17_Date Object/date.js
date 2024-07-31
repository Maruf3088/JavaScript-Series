const today = new Date(2029, 2);
// console.log(today);

const today2 = new Date(2025, 5, 15, 2, 30, 15, 25); //year , month ,date ,hour , minit,second,milisecond
console.log(today2); //2025-06-14T20:30:15.025Z
console.log(today2.toLocaleString()); //6/15/2025, 2:30:15 AM
console.log(today2.toLocaleDateString()); //6/15/2025
console.log(today2.toLocaleTimeString()); //2:30:15 AM

const todayDate = new Date().getTime();
console.log(todayDate); //1722350487775 it return you in milisecond

const year = new Date().getFullYear();
console.log(year); //2024
const date = new Date().getDate();
console.log(date); //30
const month = new Date().getMonth();
console.log(month); //6 ->july
const day = new Date().getDay();
console.log(day); //2->tuesday

const milisecond = new Date().getTime();
const milisecondToDate = new Date(milisecond);
console.log(milisecondToDate); //2024-07-30T16:11:48.970Z

//!Basically regular Used Function
/*
new Date()
new Date(2025, 5, 15, 2, 30, 15, 25); //year , month ,date ,hour , minit,second,milisecond
new Date().toLocalString()
new Date().toLocalDateString()
new Date().toLocalTimeString()
*/

//!to get date
/*
getFullYear()
getDate()
getMonth()
setDay()
*/
//!to set date
/*
setFullYear()
setDate()
setMonth()
setDay()
*/

//!to get time
/*
getTime()
getHours()
getMinutes()
getSeconds()
*/
//!to set time
/*
setTime()
setHours()
setMinutes()
setSeconds()
*/
//!REMEMBER:
/*
january ->0
February ->1
march ->2
april ->3
may ->4
..... -> ....
december -> 11
*/
//!REMEMBER:
/*
sunday ->0
monday->1
thuesday->2
wednessday->3
thusday->4
friday->5
saturday->6
*/

//! Question : write a function to calculate the difference in days between two given dates
//! Solution :

const getDaysDifference = (date1, date2) => {
  const diff = date2 - date1;
  let oneDayMiliSecond = (24 * 60 * 60 * 1000);
  return diff / oneDayMiliSecond;
};

const date1 = new Date("2024-02-19");
const date2 = new Date("2024-03-01");
console.log(getDaysDifference(date1, date2)); //output should be 11
