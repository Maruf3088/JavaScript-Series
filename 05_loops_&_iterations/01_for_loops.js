//!--------------------------for loop----------------------------------
//!syntex:
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/
//!--------------------------------- print 0 to 10------------------------------------
for (let i = 0; i <= 10; i++) {
  //   console.log(i);
}

//!--------------------------------------nested loop----------------------------------------
for (let i = 0; i <= 10; i++) {
  //   console.log(`outer loop value : ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`Outer Loop value : ${i} and inner loop value is : ${j}`);
  }
}

//!-------------------------------------loop using in Array-------------------------------
let myArray = ["flash", "batman", "superman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

//!---------------------Break and continue--------------------------------

//break
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    break; // when i ==5 than loop is breaked
  }
  console.log(`value of i is : ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
      console.log(`Detected 5`);
      continue; // when i ==5 than 5 is skip 
    }
    console.log(`value of i is : ${i}`);
  }