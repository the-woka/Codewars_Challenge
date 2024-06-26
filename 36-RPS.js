/* 
Day 6.2 - Rock Paper Scissors (8 kyu)
https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
*/

// const rps = (p1, p2) => {
//   if (
//     (p1 == "rock" && p2 == "paper") ||
//     (p1 == "paper" && p2 == "scissors") ||
//     (p1 == "scissors" && p2 == "rock")
//   ) {
//     return "Player 2 won!";
//   } else if (
//     (p1 == "rock" && p2 == "scissors") ||
//     (p1 == "paper" && p2 == "rock") ||
//     (p1 == "scissors" && p2 == "paper")
//   ) {
//     return "Player 1 won!";
//   } else {
//     return "Draw!";
//   }
// };

// Other's Answers

// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  return `Player ${
    /rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2
  } won!`;
};

console.log(rps("rock", "paper"));
