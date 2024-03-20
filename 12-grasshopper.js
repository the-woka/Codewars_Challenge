/* 
Day 2.1 - Grasshopper - Summation (8 kyu)
https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
*/

// var summation = function (num) {
//   let score = 0;
//   for (let i = 1; i <= num; i++) {
//     score += i;
//   }
//   return score;
// };

// Other's Answers

// function summation(num) {
//   return (num * (num + 1)) / 2;
// }

// const summation = (n) => (n * (n + 1)) / 2;

var summation = function f(num) {
  // f mengambil peran penting untuk perulangan function
  return num ? num + f(num - 1) : 0;
};

console.log(summation(5));
