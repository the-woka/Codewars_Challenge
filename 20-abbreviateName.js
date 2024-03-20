/*
Day 2.10 - Abbreviate a Two Word Name (8 kyu)
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
*/

// function abbrevName(name) {
//   let firstName = name.charAt(0).toUpperCase();
//   let secondName = name.split(" ").reverse().join("").charAt(0).toUpperCase();
//   return firstName + "." + secondName;
// }

// function abbrevName(name) {
//   return (
//     name.charAt(0).toUpperCase() +
//     "." +
//     name.split(" ").reverse().join("").charAt(0).toUpperCase()
//   );
// }

// const abbrevName = (name) =>
//   name.charAt(0).toUpperCase() +
//   "." +
//   name.split(" ").reverse().join("").charAt(0).toUpperCase();

// Other's Answers

// function abbrevName(name) {
//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

const abbrevName = (name) => name.match(/\b\w/g).join(".").toUpperCase();

console.log(abbrevName("Sue Hantu"));
