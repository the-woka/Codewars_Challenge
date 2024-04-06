/*
Day 5 - How good are you really? (8 kyu)
*/

// function betterThanAverage(classPoints, yourPoints) {
//   let score = 0;
//   for (let i = 0; i < classPoints.length; i++) {
//     score += classPoints[i];
//   }
//   return yourPoints >= score / classPoints.length;
// }

// function betterThanAverage(classPoints, yourPoints) {
//   return classPoints.reduce((acc, curr) => curr + acc, 0) / classPoints.length <
//     yourPoints
//     ? true
//     : false;
// }

// const betterThanAverage = (classPoints, yourPoints) =>
//   classPoints.reduce((acc, curr) => curr + acc, 0) / classPoints.length <
//   yourPoints
//     ? true
//     : false;

// function betterThanAverage(classPoints, yourPoints) {
//   return (
//     yourPoints >
//     classPoints.reduce((acc, curr) => curr + acc, 0) / classPoints.length
//   );
// }

const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints >
  classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
