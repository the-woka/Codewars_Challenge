/*
Day 4.2 - Sum Arrays (8 kyu)
https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
*/

// function sum(numbers) {
//   let score = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     score += numbers[i];
//   }
//   return score;
// }

// function sum(numbers) {
//   return numbers.reduce((acc, curr) => curr + acc, 0);
// }

const sum = (numbers) => numbers.reduce((acc, curr) => curr + acc, 0);

console.log(sum([1, 5.2, 4, 0, -1]));
