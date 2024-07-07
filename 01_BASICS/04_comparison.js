//comparison like -->

//*TYPE-01---------------------------------BASICS--------
/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);
*/

//*TYPE-02--------------------------------------------------------------

/*
!NOTES:
 *console.log("02" > 1);
 *Type Coercion: The string "02" is converted to the number 2.
 *Comparison: Now the comparison is 2 > 1.
 *Result: 2 is greater than 1, so the result is true.
 */

//!EXAMPLE:
console.log("02" > 1); //true



/*
!NOTES:
*console.log("2" > 1);
*Type Coercion: The string "2" is converted to the number 2.
*Comparison: Now the comparison is 2 > 1.
*Result: 2 is greater than 1, so the result is true.
*/

//!EXAMPLE:
console.log("2" > 1); //true

//*TYPE-03--------------------------------------------------------------

/*
!NOTES:
*When comparing null with a number using relational operators (> and <), JavaScript converts null to a number. According to the ECMAScript specification:

*null converts to 0.
*/

//!EXAMPLE:
console.log(null > 0); // false (null converts to 0, 0 > 0 is false)
console.log(null == 0); // false (null is only loosely equal to undefined and itself)
console.log(null >= 0); // true (null converts to 0, 0 >= 0 is true)

/*
!NOTES:
*When comparing undefined with a number using greater than (>) or less than (<) operators, JavaScript attempts to convert undefined to a number. The conversion rules specify that undefined converts to NaN (Not-a-Number).

*According to the ECMAScript specification:

*Any comparison between NaN and a number (or another NaN) using relational operators (>, <, >=, <=) always returns false.
*/

//!EXAMPLE:
console.log(undefined > 0); // false (undefined converts to NaN, NaN > 0 is false)
console.log(undefined < 0); // false (undefined converts to NaN, NaN < 0 is false)
console.log(undefined == 0); // false (undefined is only loosely equal to null and itself)
