/*
Day 2.4 - Find the smallest integer in the array (8 kyu)
https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
*/

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let min = args[0];
//     for (let i = 0; i <= args.length; i++) {
//       if (args[i] < min) {
//         min = args[i];
//       }
//     }
//     return min;
//   }
// }

// function findSmallestInt(args) {
//   const result = args.reduce((acc, curr) => (curr < acc ? curr : acc), args[0]);
//   return result;
// }

// function findSmallestInt(args) {
//   return args.reduce((acc, curr) => (curr < acc ? curr : acc), args[0]);
// }

// const findSmallestInt = (args) => args.reduce((acc, curr) => curr < acc ? curr : acc, args[0]);

// Other's Answer

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
