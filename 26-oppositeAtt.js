/*
Day 3.6 - Opposites Attract (8 kyu)
https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
*/

// function lovefunc(flower1, flower2) {
//   if ((flower1 % 2 == 0) ^ (flower2 % 2 == 0)) {
//     return true;
//   }
//   return false;
// }

// function lovefunc(flower1, flower2) {
//   return (flower1 % 2 == 0) ^ (flower2 % 2 == 0) ? true : false;
// }

// const lovefunc = (flower1, flower2) =>
//   (flower1 % 2 == 0) ^ (flower2 % 2 == 0) ? true : false;

// Other's Answers

// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1
// }

const lovefunc = (flower1, flower2) => (flower1 + flower2) % 2 === 1;

console.log(lovefunc(765, 249));
