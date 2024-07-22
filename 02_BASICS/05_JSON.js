//*first talk about object de-structering

const course = {
  courseNam: "JS in Hindi",
  prince: 999,
  courseInstructer: "maruf",
};

console.log(course.courseInstructer); //maruf

//another way to access courseInstructor
const { courseInstructer } = course;
console.log(courseInstructer); //maruf->now you can access object element by using only their name..you don't have to write object name again again


//you can also rename the courseInstructor cause it is so big word
const { courseInstructer: instructor } = course; //renamed by instructor
console.log(instructor);
//you can de-structure your array..but it is so rare;

//*-------------------------------------*NOW TALK ABOUT JSON---------------------------------

//!dicleration of JSON....this is like one kind of object .....but it doesn't have name like object....and keys are in string ....so it's the difference between JSON and OBJECT
/*
{
    "name" : "maruf",
    "courseName" : "JS in Hindi"
    "price" : "FREE",
}
*/

//!WE will talk about API .....All API is in JSON format