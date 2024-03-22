/*
Day 4.3 - Calculate average (8 kyu)
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
*/

// function findAverage(array) {
//   if (array.length > 0) {
//     let average = 0;
//     for (let i = 0; i < array.length; i++) {
//       average += array[i];
//     }
//     return average / array.length;
//   }
//   return 0;
// }

// function findAverage(array) {
//   return (
//     array.reduce((acc, curr) => (array.length > 0 ? acc + curr : 0), 0) /
//     array.length
//   );
// }

const findAverage = (array) =>
  array.length > 0
    ? array.reduce((acc, curr) => acc + curr, 0) / array.length
    : 0;

console.log(findAverage([1, 1, 1]));
