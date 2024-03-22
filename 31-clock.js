/*
Day 4 - Beginner Series #2 Clock (8 kyu)
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
*/

// function past(h, m, s) {
//   let clock = h * 3600000 + m * 60000 + s * 1000;
//   return clock;
// }

// function past(h, m, s) {
//   return h * 3600000 + m * 60000 + s * 1000;
// }

// const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000

// Other's Answers

const past = (h, m, s) => 1000 * (h * 3600 + m * 60 + s);

console.log(past(0, 1, 1));
