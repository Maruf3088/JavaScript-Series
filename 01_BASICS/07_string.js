let x = "john";
let y = new String("john");
console.log(x == y);
console.log(x === y);

//*---------------------------------length property------------

console.log(x.length);
console.log(y.length);

const obj = {
  name: "bangladesh",
  distance: 64,
};

console.log(obj.name);

//*------------------------------------------Slice() function-------------
let str1 = "Bangladesh";

let str2 = str1.slice(0, 6);

console.log(str2); //Bangla

//*-------------------Substring() method----------------------(also like slice function)

let str3 = "Maruf Islam";
let str4 = str3.substring(6, str3.length);
console.log(str4); //Islam

//*---------------------substr() funtion----------------------

let str5 = "hello world";
console.log(str5.substr(0, 5)); ///first peremeter where your start // second perameter is how many character you want to cut

//*-------------------------------Replace() function-----------------------------------
let str6 = "I love Bangladesh";
console.log(str6.replace("Bangladesh", "my country")); //"bangladesh" replaced by "my country"

//*-------------------------------toUpperCase() function-----------------------------------
let str7 = "Hello tech boy";
console.log(str7.toUpperCase());

//*-------------------------------toLowerCase() function-----------------------------------
let str8 = "HI HELLO HOW ARE YOU";
console.log(str8.toLowerCase());

//*-------------------------------concat() method-----------------------------------
let str9 = "My name is Maruf";
let str10 = "Islam";

console.log(str9.concat(" ", str10)); //concat means jora lagano

//*-------------------------------trim() method-----------------------------------
//The trim() method removes whitespace from both sides of a string:

let str11 = "              hey how are you ?           ";
console.log(str11.trim());

//*-------------------------------cahrAt() method-----------------------------------
let str12 = "Bangladesh";
console.log(str12.charAt(2)); //n

//* ----------------------Converting string to an array by split function-----------------------
let str13 = "M,a,r,u,f,islam";
let str14 = str13.split(",");

// for (let i = 0; i < str14.length; i++) {
//   console.log(str14[i]);
// }
console.log(typeof str14);

//*-------------------------------------indexof method--------------------------
let str15 = "hello"
console.log(str15.indexOf('h'));