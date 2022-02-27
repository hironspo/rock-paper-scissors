//returns a random selection
//random computer selection
function computerPlay() {
   
    const computerChoice = Math.random();

    if (computerChoice < 0.33) {
        return("Rock");
    } else if (computerChoice < 0.66) {
        return("Paper");
    } else {
        return("Scissors");
    }
};

//a one round test game
function playRound(playerSelection, computerSelection) {
         
    playerSelection = "Rock";
    playerSelection.toLowerCase();
    playerSelection[0].toUpperCase();
    computerSelection = computerPlay();

    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `You lose! Computers ${computerSelection} beats your ${playerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        return `Tie! Computers ${computerSelection} matched your ${playerSelection}`;
    } else {
        return `You win! Your ${playerSelection} beats the computers ${computerSelection}`;
    }
}

