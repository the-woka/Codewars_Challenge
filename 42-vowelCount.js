/*
Day 9.3 - Vowel Count (7 kyu)
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
*/

// function getCount(str) {
//   let array = str.split("");
//   let count = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == "a" || array[i] == "i" || array[i] == "u" || array[i] == "e" || array[i] == "o") {
//         count += 1;
//     }
//   }

//   return count;
// }

// function getCount(str) {
//   return str
//     .split("")
//     .reduce(
//       (acc, curr) =>
//         acc +
//         (curr == "a" || curr == "i" || curr == "u" || curr == "e" || curr == "o"
//           ? 1
//           : 0),
//       0
//     );
// }

const getCount = (str) =>
  str
    .split("")
    .reduce(
      (acc, curr) =>
        acc +
        (curr == "a" || curr == "i" || curr == "u" || curr == "e" || curr == "o"
          ? 1
          : 0),
      0
    );

console.log(getCount("abracadabra"));
