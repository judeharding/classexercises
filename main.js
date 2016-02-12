var woolOwners = [
  {
      "master": 1
  },
  {
    "dame": 1
  },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];

var totalBags = 0;


var haveYouAnyWool = function() {
    for (var i = 0; i < woolOwners.length; i++) {
    totalBags += i
    }
    return (i);
};

var bags = haveYouAnyWool();

function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + totalBags + " bags full");
  }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        people = Object.keys(woolOwners[i]);
        var person = people.toString();
        console.log("one for my " + person);
    }
}

baabaaBlackSheep();
oneForMy();

var boy = Object.keys(woolOwners[2]);
var littleBoy = (boy)[0];

var whereHeLives = woolOwners[2].location;
console.log("one for the " + littleBoy + " that lives " + whereHeLives);


























//
// var playerScore = 0;
//
// while(playerScore < 3) {
//
// var playerName = prompt("Enter name");
// var playerChoice = prompt("What do you choose, rock, paper or scissors?");
//
//
// var rock = 0;
// var paper = 1;
// var scissors = 2;
//
// var computer;
// var computerScore = 0;
//
// var compare;
//
// switch(playerChoice){
//   case 'rock':
//     console.log("You picked " + playerChoice);
//     break;
//   case 'paper':
//     console.log("You picked " + playerChoice);
//     break;
//   case 'scissors':
//     console.log("You picked " + playerChoice);
//     break;
//   default:
//     console.log("You automatically lose");
// }
//
// computer = parseInt(Math.random()*10)%3;
// console.log (computer);
//
// switch(computer){
//   case 0:
//     console.log("Computer picked rock");
//     break;
//   case 1:
//     console.log("Computer picked paper");
//     break;
//   case 2:
//     console.log("Computer picked scissors");
//     break;
//   }
//
// if (computer == 0) {
//   switch(playerChoice){
//     case 'rock':
//       console.log("It's a tie");
//       break;
//     case 'paper':
//       console.log("You win");
//       playerScore = playerScore + 1;
//       break;
//     case 'scissors':
//       console.log("You lose");
//       break;
//   }
// }
//
// if (computer == 1) {
//   switch(playerChoice){
//     case 'rock':
//       console.log("You lose");
//       break;
//     case 'paper':
//       console.log("It's a tie");
//       break;
//     case 'scissors':
//       console.log("You win");
//       playerScore = playerScore + 1;
//       break;
//   }
// }
//
// if (computer == 2) {
//   switch(playerChoice){
//     case 'rock':
//       console.log("You win");
//       playerScore = playerScore + 1;
//       break;
//     case 'paper':
//       console.log("You lose");
//       break;
//     case 'scissors':
//       console.log("It's a tie");
//       break;
//   }
// }
// console.log (playerName + "\'s score is " + playerScore);
//
// }
