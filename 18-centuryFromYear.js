/*
Day 2.8 - Century From Year (8 kyu)
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
*/

// function century(year) {
//   let i = 0;
//   while (true) {
//     if (i >= year / 100) {
//       return i;
//     }
//     i++;
//   }
//   return 0;
// }

// Other's Answers

// function century(year) {
//   return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
// }

// const century = year => Math.ceil(year/100)

// function century(year) {
//   return year % 100 == 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;
// }

const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;

console.log(century(100));
