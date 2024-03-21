/*
Day 3.3 - Is n divisible by x and y? (8 kyu)
https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
*/

// function isDivisible(n, x, y) {
//   if (n % x == 0 && n % y == 0) {
//     return true;
//   }
//   return false;
// }

// function isDivisible(n, x, y) {
//   return n % x == 0 && n % y == 0 ? true : false;
// }

// const isDivisible = (n, y, x) => (n % x == 0 && n % y == 0 ? true : false);

// Other's Answers

function isDivisible(n, ...dividers) {
  return dividers.every((divider) => n % divider == 0);
} // kondisi dimana dividernya belum ditentukan berapa jumlahnya

console.log(isDivisible(12, 3, 4));
