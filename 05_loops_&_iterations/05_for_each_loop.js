const coding = ["js", "ruby", "phyton", "cpp", "java"];

//!normal function
coding.forEach(function (item) {
  console.log(item);
});
/*
output:
js
ruby
phyton
cpp
java
 */

//!Arrow Function
coding.forEach((item) => {
  console.log(item);
});
/*
output:
js
ruby
phyton
cpp
java
 */
//!for each loop using outer function
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe);

/*
output:
js
ruby
phyton
cpp
java
 */

//!for each loop can print value,index,full-array
coding.forEach((value, index, fullArr) => {
  console.log(index, value, fullArr);
});
/*
output:
0 js [ 'js', 'ruby', 'phyton', 'cpp', 'java' ]
1 ruby [ 'js', 'ruby', 'phyton', 'cpp', 'java' ]
2 phyton [ 'js', 'ruby', 'phyton', 'cpp', 'java' ]
3 cpp [ 'js', 'ruby', 'phyton', 'cpp', 'java' ]
4 java [ 'js', 'ruby', 'phyton', 'cpp', 'java' ]
*/

//!Array Of Object and use for-each loop and access object item
const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName: "phython",
    languageFileName: "py",
  },
];

myCoding.forEach( (item)=>{
  console.log(item.languageName);
} )

/*
output:
Javascript
C++
phython
*/