/* 
Day 6 - Invert Values (8 kyu)
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
*/

// function invert(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * -1;
//   }
//   return array;
// }

// Other's Answers

// function invert(array) {
//   return array.map((num) => -num);
// }

const invert = (array) => array.map((num) => -num);

console.log(invert([1, 2, 3, 4]));
