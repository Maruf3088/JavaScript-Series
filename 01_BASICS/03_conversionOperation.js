//Type of conversion like string to number or  number to string like that

//*EXAMPLE-01

let score = "33";

console.log(typeof score); //method 1
console.log(typeof score); //method2

//if we work with number...the user give any type of datatype they give..you shpuld convert it into number ...so that you can do your operation...so the way to convert follow below :

let valueInNumber = Number(score); // convert the value of score in number and store in valueInNumber

console.log(typeof valueInNumber);
console.log(valueInNumber); //print the value
//-----------------------------------------------------------------------------------
//!BUT BUT BUT everytime it cannot convert all things in number or whatever it is.for example...

//*EXAMPLE-02

let number = "33abc";
let valueInNumber2 = Number(number);

console.log(valueInNumber2); //it cannot show proper number ..it shows Nan
//-------------------------------------------------------------------
//*EXAMPLE-03

let Name = "Maruf"; // this is a string ,so that it cannot convert

let valueInNumber3 = Number(Name);

console.log(valueInNumber3); //it shows NaN

//!SUMMARY:
/*
 *"33" => 33
 *"33abc" => NaN (Full form : Not a Number)
 *true => 1
 *false => 0
 */
//------------------------------------------------
//convert any datatype to boolean
let isLogedIn = 1;
let isLogedInBoolean = Boolean(isLogedIn);
console.log(isLogedInBoolean);

//!SUMMARY:
/*
 *1 => true
 *0 => false
 *"33abc" => true
 *"" => false
 */
//--------------------------------------
let n = 3;
let neg_n = -n;
console.log(neg_n); //it shows -3

//----------------------------------------------BASICS--
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2); //2 to de power 2
console.log(2 ** 3); //2 to de power 3

//----------------------------------------------string add-----

let str1 = "Maruf";
let str2 = " Islam";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(true); //true
console.log(+true); //1
// console.log(true+) //you will get error;