const myArr = [1, 2, 3, 4, 5];

let initialValue = 0;

let totalValue = myArr.reduce((acc, num) => acc + num, initialValue);

console.log(totalValue);
//!1+2+3+4+5=15

const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = myArr2.reduce((acc, num) => acc * num, 1);
console.log(total);
//! 3628800

//!-----------------------------real project example--------------------------------
const myCartList = [
  {
    productName: "shampoo",
    productprice: 1200,
  },
  {
    productName: "oil",
    productprice: 2000,
  },
  {
    productName: "milk",
    productprice: 800,
  },
  {
    productName: "nut",
    productprice: 250,
  },
  {
    productName: "ice-cream",
    productprice: 40,
  },
];

let totalToPay = myCartList.reduce((acc, obj) => obj.productprice + acc, 0);
console.log(`you have to pay ${totalToPay}`);
//!you have to pay 4290