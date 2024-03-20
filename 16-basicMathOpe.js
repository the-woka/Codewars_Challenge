/*
Day 2.6 - Basic Mathematical Operations (8 kyu)
https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
*/

// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   }
//   return 0;
// }

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//       break;
//     case "-":
//       return value1 - value2;
//       break;
//     case "/":
//       return value1 / value2;
//       break;
//     case "*":
//       return value1 * value2;
//       break;
//   }
//   return 0;
// }

// Other's Answers

// function basicOp(operation, value1, value2) {
//   var cases = {
//     "+": value1 + value2,
//     "-": value1 - value2,
//     "*": value1 * value2,
//     "/": value1 / value2,
//   };
//   return cases[operation];
// }

// function basicOp(operation, value1, value2) {
//   return eval(value1 + operation + value2);
// }

// const basicOperations = {
//   "+": (a, b) => a + b,
//   "-": (a, b) => a - b,
//   "*": (a, b) => a * b,
//   "/": (a, b) => a / b,
// };

// const basicOp = (op, x, y) => basicOperations[op](x, y);

const basicOp = (operation, value1, value2) =>
  eval(`${value1} ${operation} ${value2}`);

console.log(basicOp("+", 10, 20));
