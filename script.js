// have computer generate one of rock, paper, or scissors
// have user choose one of rock, paper, or scissors
// paper beats rock
// rock beats scissors
// scissors beats paper
// if user picks winning choice
// return WINNER
// display PLAY AGAIN button

//computer choice
function getComputerChoice () {
    let choice = ["rock", "paper", "scissors"]
    let computerChoice = choice.at(Math.floor(Math.random() * choice.length));
    return computerChoice
}

//user choice
function getPlayerChoice () {
    let playerInput = prompt("type your choice...")
    let result = playerInput
    return result;
}

//rules
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        return "it's a tie replay this round";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! paper beats rock`;
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You win! rock beats scissors`;
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose!scissors beats paper`;
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You win! paper beats rock`;
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You lose! rock beats scissors`;
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! scissors beats paper`;
      }
}

//game
function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (i = 0; i < 5; i++) {
        const result = playRound (playerSelection, computerSelection);
        if (result.includes("win")) {
            playerScore++;
            console.log("computer;", computerScore, "player;", playerScore);
        } else if (result.includes("lose")) {
            computerScore++;
            console.log("computer;", computerScore, "player;", playerScore);
        } else if (result.includes("tie")) {
            console.log("computer;", computerScore, "player;", playerScore);
        }
    }

}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
console.log(playRound (playerSelection, computerSelection));
console.log(game ());



