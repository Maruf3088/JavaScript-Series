//!_____Nullish Coalescing Operator (??) : it works only on null and undefined ;

let val1 = 5 ?? 10;
console.log(val1); //5

let val2 = null ?? 20;
console.log(val2); //20

let val3 = undefined ?? 30;
console.log(val3); //30

let val4 = null ?? 40 ?? 50;
console.log(val4); //40

//!----------------------------------terniary Operator : ?-----------------------------
//! syntex : condition ? true : false

let Price = 80;

Price >= 100
  ? console.log(`more than hundred`)
  : console.log(`less than hundred`);

Price = 180;

Price >= 100
  ? console.log(`more than hundred`)
  : console.log(`less than hundred`);
