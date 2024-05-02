/* 
Day 7.2 - Count of positives / sum of negatives (8 kyu)
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
*/

// function countPositivesSumNegatives(input) {
//   result = [];
//   positive = 0;
//   negative = 0;

//   if (input) {
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] > 0) {
//         positive++;
//       } else {
//         negative += input[i];
//       }
//     }
//   }

//   result.push(positive, negative);

//   if (!positive && !negative) {
//     return [];
//   } else {
//     return result;
//   }
// }

// Other's Answers

function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, -1, -6, -7]));
