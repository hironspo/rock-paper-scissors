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
    //playerSelection.toLowerCase() = prompt("Chose ROCK, PAPER, or SCISSORS");
    //playerSelection[0].toUpperCase();
    computerSelection = computerPlay();

    //if the player chooses ROCK logic
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return `You lose! The computers ${computerSelection} beats your ${playerSelection}`;
        } else if (computerSelection === "Scissors") {
            return `You win! Your ${playerSelection} beats the computers ${computerSelection}`;
        } else {
            return `Tie! Computers ${computerSelection} matches your ${playerSelection}`;
        }
    } 
    
    //if the player chooses PAPER logic
     else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return `You lose! The computers ${computerSelection} beats your ${playerSelection}`;
        } else if (computerSelection === "Rock") {
            return `You win! Your ${playerSelection} beats the computers ${computerSelection}`;
        } else {
            return `Tie! Computers ${computerSelection} matches your ${playerSelection}`;
        }
    }

    //if the player chooses SCISSORS logic
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return `You lose! The computers ${computerSelection} beats your ${playerSelection}`;
        } else if (computerSelection === "Paper") {
            return `You win! Your ${playerSelection} beats the computers ${computerSelection}`;
        } else {
            return `Tie! Computers ${computerSelection} matches your ${playerSelection}`;
        }
    }
}

function game() {

    for (let i = 0; i < 5; ++i){
        console.log(playRound());
    }

}