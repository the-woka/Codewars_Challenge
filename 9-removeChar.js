/*
Day 1.9 - Remove First and Last Character (8 kyu)
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
*/

// function removeChar(str) {
//   let arr = str.split("");
//   arr.shift();
//   arr.pop();
//   return arr.join("");
// }

// function removeChar(str) {
//   let arr = str.split("");
//   arr.splice(0, 1).arr.splice(arr.length - 1, 1);
//   return arr.join("");
// }

// Other's Answer

// function removeChar(str) {
//   return str.slice(1, -1);
// }

const removeChar = (str) => str.slice(1, -1);
