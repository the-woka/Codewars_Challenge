/* 
Day 1.5 - Reversed String (8 kyu)
https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
*/

// function solution(str) {
//   let reversedArr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedArr += str[i];
//   }
//   return reversedArr;
// }

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// const solution = (str) => str.split("").reverse().join("");

// Other's Answer

const solution = (s) => [...s].reverse().join("");
