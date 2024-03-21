/* 
Day 3.7 - Beginner - Lost Without a Map (8 kyu)
https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
*/

// function maps(x) {
//   doubled = [];
//   for (let i = 0; i < x.length; i++) {
//     doubled.push(x[i] * 2);
//   }
//   return doubled;
// }

// Other's Answers

// function maps(x) {
//   return x.map((n) => n * 2);
// }

const maps = arr => arr.map( x => x * 2 )

console.log(maps([1, 2, 3]));
