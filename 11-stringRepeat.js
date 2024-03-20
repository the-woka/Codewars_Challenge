/*
Day 2 - String Repeat (8 kyu)
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
*/

// function repeatStr(n, s) {
//   let string = "";
//   for (let i = 0; i < n; i++) {
//     string += s;
//   }
//   return string;
// }

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(3, "hai"));
