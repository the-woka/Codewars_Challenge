/* 
Day 1.3
https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
*/

// function makeNegative(num) {
//   if (num > 0) {
//     return -num;
//   } else if (num < 0) {
//     return num;
//   }
//   return 0;
// }

// function makeNegative(num) {
//   return num > 0 ? -num : num;
// }

// const makeNegative = (num) => (num > 0 ? -num : num);

// Other's answers

// function makeNegative(num) {
//   return -Math.abs(num);
// }

makeNegative = (n) => -Math.abs(n);
