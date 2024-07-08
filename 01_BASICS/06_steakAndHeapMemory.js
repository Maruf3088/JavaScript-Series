//!two types of memory in javascript

/*
!one is heap and another is steak

*heap memory used is nonpremitive datatype
*stack memory used in premitive datatype
*/

//!Stack memory example:(number , string , symbol , bigInt , boolean etc)
let no1 = "imaruf770@gmail.com";
let no2 = no1;

no2 = "user770@gmail.com"; //no2 cannot change the value of no1 because no1 send copy of her value to no2 ...not reference

console.log(no1);
console.log(no2);

//!heap memory example:(array ,object , function)

let obj1 = {
  name: "maruf",
  no: 12,
};

let obj2 = obj1;

obj2.name = "sohan"; // obj2 can change the value obj1 because obj1 send her reference of her value so that after changing the value by obj2 ,,,than value changed of oj1 also

console.log(obj1.name);
console.log(obj2.name);
