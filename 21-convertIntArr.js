/*
Day 3 - Convert number to reversed array of digits (8 kyu) 
https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
*/

// function digitize(n) {
//   let score = 0;
//   let arr = [];
//   for (let i = 1; i <= n; i = 10**i) {
//     score = Math.floor(n / i) % 10;
//     arr.push(score);
//   }
//   return arr;
// }

// function digitize(n) {
//   return Array.from(String(n), Number).reverse();
// }

const digitize = (n) => Array.from(String(n), Number).reverse();

console.log(digitize(0));
