


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
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! rock beats scissor!");
        humanScore ++
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose! rock beats scissor!");
        computerScore ++;
    }

    // paper beats rock
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! paper beats rock!");
        humanScore ++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose! paper beats rock!");
        computerScore ++;
    }

    // scissors beats paper
    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! scissors beats paper!");
        humanScore ++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose! scissors beats paper!");
        computerScore ++;
    }
}

function playGame() {
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    if (i < 5) {
        console.log(`ROUND ${i + 1} The Current Score is - Human has ${humanScore} points and the Computer has ${computerScore} points`)
        console.log ("")
    }
}
    if (humanScore > computerScore) {
        console.log(`CONGRATULATIONS!!! You have won ${humanScore} rounds out of 5`);
    } else if (computerScore > humanScore) {
        console.log(`You have lost.. The computer won ${computerScore} rounds out of 5`);
    } else {
        console.log(`The game has ended in a draw. Final Score is - Human has ${humanScore} points out of 5 and the Computer has ${computerScore} points out of 5`);
    }

}
playGame();



