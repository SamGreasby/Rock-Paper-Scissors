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
getComputerChoice();

/* Human Choice Functionality */

function getHumanChoice(HumanChoice) {
    const humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(`Player chooses ${humanChoice}`);
    return humanChoice;
}
getHumanChoice();

/* Round Functionality */

function playRound(humanChoice, computerChoice) {

    // if player and computer pick the same choice
    if (computerChoice === humanChoice) {
        console.log("Draw! Play again!");
    }

    // rock beats scissors
    // paper beats rock
    // scissors beats paper
}
playRound();



let humanScore = 0;
let computerScore = 0;
