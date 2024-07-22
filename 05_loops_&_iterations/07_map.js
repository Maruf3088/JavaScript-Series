let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let newArr = myArr.map((num) => num + 10); // implicit return
console.log(newArr);

/*
output:
[11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
*/

newArr = myArr.map((num) => {
  return num * 10;
}); ///explicit return
console.log(newArr);

/*
output:
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
*/
//!-------------------caining (map->map->filter)--------------------------
newArr = myArr
  .map((num) => num + 10)
  .map((num) => num * 10)
  .filter((num) => num >= 150);

console.log(newArr);
/*
output:
[150, 160, 170, 180, 190, 200, 210, 220];
*/