/*
Day 2.3 - Remove String Spaces (8 kyu)
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
*/

// function noSpace(x) {
//   let arr = x.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == " ") {
//         arr[i] = "";
//     }
//   }
//   return arr.join("");
// }

// function noSpace(x) {
//   const str = x.replace(/ /g, "");
//   return str;
// }

// function noSpace(x) {
//   return x.replace(/ /g, "");
// }

// const noSpace = (x) => x.replace(/ /g, "");

// Other's Answers

// function noSpace(x){return x.split(' ').join('')}

// const noSpace = (x) => x.split(' ').join('');

// function noSpace(x) {
//   return x.replaceAll(" ", "");
// }

const noSpace = (x) => x.replaceAll(" ", "");

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
