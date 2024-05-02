/* 
Day 8 - You only need one - Beginner (8 kyu)
https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
*/

// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (x == a[i]) {
//         return true;
//     }
//   }
//   return false;
// }

// function check(a, x) {
//   return a.includes(x);
// }

const check = (a, x) => a.includes(x);

console.log(check([66, 101], 101));
