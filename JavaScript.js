/* Computer Choice functionality */

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else if (randomNumber === 2) {
        computerChoice = "scissors";
    }
    console.log(`Computer chooses ${computerChoice}`);
    return computerChoice;
}
/* Human Choice Functionality */

function getHumanChoice(HumanChoice) {
    const playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(`Player chooses ${playerChoice}`);
    return playerChoice;
}
const humanScore = 0
const computerScore = 0

function playRound(humanChoice, computerChoice) {

}


const humanSelection = getComputerChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);