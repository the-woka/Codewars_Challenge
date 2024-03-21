/*
Day 3.8 - Beginner Series #1 School Paperwork (8 kyu)
https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript
*/

// function paperwork(n, m) {
//   if (n > 0 && m > 0) {
//     return n * m;
//   }
//   return 0;
// }

// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0;
// }

// const paperwork = (n, m) => (n > 0 && m > 0 ? n * m : 0);

const paperwork = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

console.log(paperwork(5, 5));
