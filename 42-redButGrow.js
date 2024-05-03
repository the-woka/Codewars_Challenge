/* 
Day 9.2 - Reduce But Grow (8 kyu)
https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
*/

// function grow(x) {
//   let score = 1;
//   for (let i = 0; i < x.length; i++) {
//     score *= x[i];
//   }
//   return score;
// }

// function grow(x) {
//   return x.reduce((acc, curr) => acc * curr, 1);
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

console.log(grow([1, 2, 3, 4, 5]));
