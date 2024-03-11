
let userChoice;
// prompt for correct user input, execute do first, if needed, continue with while
do {
    userChoice = prompt("Enter one of the following: 'rock', 'paper', or 'scissors'")
} while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors")
// generate a random number between 0 and 2, round down
let compChoice = Math.floor(Math.random() * 3)
// convert the computers choice to a string
switch (compChoice) {
    case 0:
        compChoice = "rock"
        // console.log(`computers choice is ${compChoice}`)
        break;
    case 1:
        compChoice = "paper"
        // console.log(`computers choice is ${compChoice}`)
        break;
    case 2:
        compChoice = "scissors"
        // console.log(`computers choice is ${compChoice}`)
        break;
}
// handle the case of a tie
if (userChoice === compChoice) {
    alert(`It's a tie with both choosing ${userChoice}`)
}
// the case where the user wins
else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")) {
        alert(`You've won the game! The computer chose ${compChoice}`)
    }
// the case where the computer won
else {
    alert(`The computer won by choosing ${compChoice}`)
}