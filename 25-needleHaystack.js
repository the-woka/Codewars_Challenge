/*
Day 3.5 - A Needle in the Haystack (8 kyu)
https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
*/

// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] == "needle") {
//       return `found the needle at position ${i}`;
//     }
//   }
//   return "Your function didn't return anything";
// }

// Other's Answers

// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.indexOf("needle")}`;
// }

const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
