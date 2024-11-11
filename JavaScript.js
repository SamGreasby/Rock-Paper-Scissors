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

let humanScore = 0;
let computerScore = 0;

/* Round Functionality */

function playRound(humanChoice, computerChoice) {

    // if player and computer pick the same choice
    if (computerChoice === humanChoice) {
        console.log("Draw! Play again!");
    }

    // rock beats scissors
    if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("You win! rock beats scissor!");
        humanScore ++
    } else if (computerChoice === "rock" && humanChoice === "scissor") {
        console.log("You lose! rock beats scissor!");
        computerScore ++
    }

    // paper beats rock
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock!");
        humanScore ++
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! paper beats rock!");
        computerScore ++
    }

    // scissors beats paper
    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beats paper!");
        humanScore ++
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! scissors beats paper!");
        computerScore ++
    }
}




function playGame() {
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}
}


