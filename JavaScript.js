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

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    console.log(`Player chooses ${humanChoice}`);
    return humanChoice;
}

/* Round Functionality */

function playRound(humanChoice, computerChoice) {
    let winner;

    // if player and computer pick the same choice
    if (computerChoice === humanChoice) {
        console.log("Draw! Play again!");
        return winner = 0;
    }

    // rock beats scissors
    if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win! rock beats scissor!");
        return winner = 1;
    } else if (computerChoice === "rock" && humanChoice === "scissor") {
        console.log("You lose! rock beats scissor!");
        return winner = 2;
    }

    // paper beats rock
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock!");
        return winner = 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! paper beats rock!");
        return winner = 2;
    }

    // scissors beats paper
    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beats paper!");
        return winner = 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! scissors beats paper!");
        return winner = 2;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let winner;
}


