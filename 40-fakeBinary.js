/* 
Day 8.2 - Fake Binary (8 kyu)
https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
*/

// function fakeBin(x) {
//   let array = x.split("")
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] >= 5) {
//         array[i] = 1;
//     } else {
//         array[i] = 0;
//     }
//   }
//   return array.join("");
// }

// function fakeBin(x) {
//   let array = x.split("");
//   let mapping = array.map((x) => (x >= 5 ? (x = 1) : (x = 0)));
//   return mapping.join("");
// }

// Other's Answers

// function fakeBin(x) {
//   return x
//     .split("")
//     .map((x) => (x >= 5 ? (x = 1) : (x = 0)))
//     .join("");
// }

// const fakeBin = (x) =>
//   x
//     .split("")
//     .map((x) => (x >= 5 ? (x = 1) : (x = 0)))
//     .join("");

// function fakeBin(x) {
//     return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }

const fakeBin = (x) => x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));

console.log(fakeBin("123789"));
