/*
Day 2.5 - Counting Sheep... (8 kyu)
https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
*/

// function countSheeps(sheep) {
//   let value = 0;
//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i]) {
//       value++;
//     }
//   }
//   return value;
// }

// function countSheeps(sheep) {
//   const value = sheep.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
//   return value;
// }

// function countSheeps(sheep) {
//   return sheep.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);
// }

const countSheeps = (sheep) =>
  sheep.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);

console.log(
  countSheeps([
    undefined,
    null,
    false,
    true,
    true,
    false,
    null,
    undefined,
    true,
  ])
);
