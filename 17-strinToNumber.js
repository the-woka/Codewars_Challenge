/*
Day 2.7 Convert a String to a Number! (8 kyu)
https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
*/

// const stringToNumber = function (str) {
//   return parseInt(str);
// };

// const stringToNumber = (str) => parseInt(str);

const stringToNumber = (str) => +str;

console.log(stringToNumber("-20"));
