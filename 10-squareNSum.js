/*
Day 1.10 - Square(n) Sum (8 kyu)
https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/

// function squareSum(numbers) {
//   let value = 0;
//   for (let i = 0; i <= numbers.length-1; i++) {
//     value += numbers[i] ** 2;
//   }
//   return value;
// }

// function squareSum(numbers) {
//   const result = numbers.reduce((acc, curr) => acc + curr**2, 0);
//   return result;
// }

// function squareSum(numbers) {
//   return numbers.reduce((acc, curr) => acc + curr**2, 0);
// }

const squareSum = (numbers) => numbers.reduce((acc, curr) => acc + curr**2, 0);

console.log(squareSum([1, 2, 5]));
