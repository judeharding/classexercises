
var playerScore = 0;

var playerName = prompt("Enter name");

while(playerScore < 3) {
var playerChoice = prompt("What do you choose, rock, paper or scissors?");


var rock = 0;
var paper = 1;
var scissors = 2;

var computer;
var computerScore = 0;

var compare;

switch(playerChoice){
  case 'rock':
    console.log("You picked " + playerChoice);
    break;
  case 'paper':
    console.log("You picked " + playerChoice);
    break;
  case 'scissors':
    console.log("You picked " + playerChoice);
    break;
  default:
    console.log("You automatically lose");
}

computer = parseInt(Math.random()*10)%3;
console.log (computer);

switch(computer){
  case 0:
    console.log("Computer picked rock");
    break;
  case 1:
    console.log("Computer picked paper");
    break;
  case 2:
    console.log("Computer picked scissors");
    break;
  }

if (computer == 0) {
  switch(playerChoice){
    case 'rock':
      console.log("It's a tie");
      break;
    case 'paper':
      console.log("You win");
      playerScore = playerScore + 1;
      break;
    case 'scissors':
      console.log("You lose");
      break;
  }
}

if (computer == 1) {
  switch(playerChoice){
    case 'rock':
      console.log("You lose");
      break;
    case 'paper':
      console.log("It's a tie");
      break;
    case 'scissors':
      console.log("You win");
      playerScore = playerScore + 1;
      break;
  }
}

if (computer == 2) {
  switch(playerChoice){
    case 'rock':
      console.log("You win");
      playerScore = playerScore + 1;
      break;
    case 'paper':
      console.log("You lose");
      break;
    case 'scissors':
      console.log("It's a tie");
      break;
  }
}
console.log (playerName + "\'s score is " + playerScore);

}



//
// var playerOne;
// var playerTwo;
// var playerOneScore = 0;
// var playerTwoScore = 0;
//
// while (playerOneScore < 3 || playerTwoScore < 3) {
//   playerOne = parseInt(Math.random()*10%3);
//
//   if (playerOne == 0) {
// 	playerOne = "rock";
// } else if (playerOne == 1) {
// 	playerOne  = "paper";
// } else {
// 	playerOne  = "scissors";
//   }
//
// console.log("contestant 1 played" + playerOne + "!");
//
// playerTwo = parseInt(Math.random()*10%3);
// if (playerTwo == 0) {
// playerTwo = "rock";
// } else if (playerTwo == 1) {
// playerTwo  = "paper";
// } else {
// playerTwo  = "scissors";
// }
//
// console.log("contestant 2 played" + playerTwo + "!");
//
//
//
// if (playerOne === playerTwo) {
//   console.log("it's a tie");
// }
//
// else if (playerOne === "rock" && playerTwo === "scissors") {
//   playerOneScore = playerOneScore + 1
//   console.log("Player one has won " + playerOneScore + " rounds and player two has won " + playerTwoScore + " rounds" );
//
// }
//
// else if (playerOne === "rock" && playerTwo === "paper") {
//   playerTwoScore = playerTwoScore + 1
//   console.log("Player one has won" + playerOneScore + " rounds and player two has won " + playerTwoScore + " rounds");
// }
//
// else if (playerOne === "paper" && playerTwo === "rock") {
//   playerOneScore = playerOneScore + 1
//   console.log("Player one has won " + playerOneScore + " rounds and player two has won " + playerTwoScore + " rounds" );
// }
//
//
//
// else if (playerOne === "paper" && playerTwo === "scissors") {
//   playerTwoScore = playerTwoScore + 1
//   console.log("Player one has won" + playerOneScore + " rounds and player two has won " + playerTwoScore+ " rounds");
// }
//
// else if (playerOne === "scissors" && playerTwo === "paper") {
//   playerOneScore = playerOneScore + 1
//   console.log("Player one has won " + playerOneScore + " rounds and player two has won " + playerTwoScore + " rounds" );
//
// }
//
// else if (playerOne === "scissors" && playerTwo === "rock") {
//   playerTwoScore = playerTwoScore + 1
//   console.log("Player one has won" + playerOneScore + " rounds and player two has won " + playerTwoScore+ " rounds");
// }
//
// if (playerOneScore === 3) {
//   console.log("player one wins!");
// }
//
// else (playerTwoScore === 3){
//   console.log("player two wins!");
// }
