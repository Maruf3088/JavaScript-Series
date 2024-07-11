//!-----------------Non singleton Object------------------
// const tinderUser = new Object()

//!-----------------singleton Object--------
const tinderUser = {}; // object

tinderUser.id = "C233228";
tinderUser.name = "Maruf";
tinderUser.isLogedIn = true;

console.log(tinderUser); //print object

//!_________________Object er bitor object___________

const regularUser = {
  //!object-1
  email: "imaruf770@gmail.com",

  fullname: {
    //!object-2
    userFullName: {
      //!object-3
      firstname: "Maruf",
      lastName: "Islam",
    },
  },
};

//!access object element:
console.log(regularUser);
console.log(regularUser.fullname.userFullName.firstname); //Maruf

//!_________________Object marge korar niyom___________

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//*METHOD_01
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

//*METHOD_02
const obj3 = { ...obj1, ...obj2 }; //! esist way to merge objects
console.log(obj3);

//!______________________Array Of Objects---------------------

const arrObj = [
  {
    id: "23344", //!object-1
    age: 12,
  },
  {
    id: "23344", //!object-2
    age: 12,
  },
  {
    id: "23344", //!object-3
    age: 12,
  },
  {
    id: "23344", //!object-4
    age: 12,
  },
];

//*how to access object from arr.
console.log(arrObj[0].age);

//!______________________Extra Features---------------------

//!to print all keys in an array from the object follow below way
console.log(Object.keys(tinderUser));
//[ 'id', 'name', 'isLogedIn' ]->array of keys

//!to print all values in an array from the object follow below way
console.log(Object.values(tinderUser));
//[ 'C233228', 'Maruf', true ]->array of values

//!to print all values and keys in an array from the object follow below way
console.log(Object.entries(tinderUser));
//[ [ 'id', 'C233228' ], [ 'name', 'Maruf' ], [ 'isLogedIn', true ] ]

//!_________________Kono property ache kina check korar jonno follow below________________

console.log(tinderUser.hasOwnProperty('isLogedIn')); //return true
console.log(tinderUser.hasOwnProperty('isLoged')); //return false
console.log(tinderUser.hasOwnProperty('name')); //return true

