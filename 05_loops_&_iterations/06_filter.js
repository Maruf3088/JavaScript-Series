const coding = ["js", "ruby", "phyton", "cpp", "java"];

/*
const values = coding.forEach((item) => {
  return item;
});
console.log(values);
*/

//!FILTER
const myNums = [1, 2, 5, 6, 3, 25, 41, 52, 5];

const values = myNums.filter((item) => item);
// const values = myNums.filter((item) => {return item});

console.log(values);
/*
output :
[1,  2,  5, 6, 3, 25, 41, 52, 5]
*/

//!FILTER (with condition)
const newnums = myNums.filter((item) => item >= 25);
// const newnums = myNums.filter((item) => {return item>=25}); // same work like line no-23

console.log(newnums);
/*
output:
[ 25, 41, 52 ]
*/

//!for each loop (with condition)

let tempNum = [];
myNums.forEach((num) => {
  if (num >= 25) {
    tempNum.push(num);
  }
});
console.log(tempNum);
/*
output:
[ 25, 41, 52 ]
*/

//!------------------filter with real project example-----------------------------------
const books = [
  {
    title: "book-one",
    genre: "fiction",
    publish: 1981,
    editon: 2004,
  },
  {
    title: "book-two",
    genre: "history",
    publish: 1999,
    editon: 2008,
  },
  {
    title: "book-three",
    genre: "non-fiction",
    publish: 1957,
    editon: 2002,
  },
  {
    title: "book-four",
    genre: "history",
    publish: 2000,
    editon: 2021,
  },
  {
    title: "book-five",
    genre: "geography",
    publish: 1952,
    editon: 2000,
  },
];

let selectedBooks = books.filter((bk) => (bk.genre == "history" && bk.publish>1999));
console.log(selectedBooks);
