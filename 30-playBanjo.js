/*
Day 3.10 - Are You Playing Banjo? (8 kyu)
https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
*/

// function areYouPlayingBanjo(name) {
//   if (name.charAt(0).toUpperCase() == "R") {
//     return name + " plays banjo";
//   }
//   return name + " does not play banjo";
// }

// function areYouPlayingBanjo(name) {
//   return name.charAt(0).toUpperCase() == "R"
//     ? name + " plays banjo"
//     : name + " does not play banjo";
// }

// const areYouPlayingBanjo = (name) =>
//   name.charAt(0).toUpperCase() == "R"
//     ? name + " plays banjo"
//     : name + " does not play banjo";

const areYouPlayingBanjo = (name) =>
  name.charAt(0).toUpperCase() == "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

console.log(areYouPlayingBanjo("ralue"));
