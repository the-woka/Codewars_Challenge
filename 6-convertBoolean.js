/*
Day 1.6 - Convert boolean values to strings 'Yes' or 'No' (8 kyu)
https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript
*/

// function boolToWord( bool ){
//   if (bool) {
//     return "Yes";
//   }
//   return "No"
// }

// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

const boolToWord = (bool) => (bool ? "Yes" : "No");
