/*
Day 1.4 - Sum of Positive (8 kyu)
https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
*/

// function positiveSum(arr) {
//   let score = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       score += arr[i];
//     }
//   }
//   return score;
// }

// Other's Answer

// function positiveSum(arr) {
//   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
