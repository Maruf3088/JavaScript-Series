//!-----------------------------!Number------------------------------

const score = 10;
console.log(score);

const balance = new Number(100);
console.log(balance);

//*--------------------toString Method-------------------
console.log(balance.toString());
console.log(typeof balance);

console.log(score.toFixed(2)); //10.00-> dosomik er por koita songka dekabe seta

//*-------------------toPrecision method-------------------
let anotherNum = 10.2356;
console.log(anotherNum.toPrecision(3)); //10.2->in total koita songka dekate hbe seta and it returns a string

//*-------------------toLocalString method-------------------
let hundred = 1000000;
console.log(hundred.toLocaleString()); //1,000,000
console.log(hundred.toLocaleString("en-IN")); //10,00,000

//!-----------------------------!Math------------------------------
console.log(Math.PI); //3.141592653589793

//*---------------------------abs method-------------------------------
let negValue = -4;
console.log(Math.abs(negValue)); //4->it returns absoulute value

//*---------------------------round method-------------------------------
let num1 = 4.6;
console.log(Math.round(num1)); //4.6->5  4.3->4

//*---------------------------ceil method-------------------------------
let num2 = 5.3;
console.log(Math.ceil(num2)); //6->it choose top(max) value

//*---------------------------floor method-------------------------------
let num3 = 5.3;
console.log(Math.floor(num3)); //5->it choose ground (min) value

//*---------------------------min method-------------------------------
console.log(Math.min(2, 3, 1, 5, 1, 6));
//*---------------------------max method-------------------------------
console.log(Math.max(2, 3, 1, 5, 1, 6));

// !!----------------------------IMPORTANT--------------------------
console.log(Math.random()); //->random number range(0 to 1)
console.log(Math.random() * 10); //-> random number range (0 to 9)
console.log(Math.floor(Math.random() * 10 + 1)); //-> random number range (1 to 9)

//!! Random number in a perticular range like in ludo we see the dice num is 1 to 6...so that follow below steps

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //-> random number range (10 to 20)
