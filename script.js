function getComputerChoice(){
    outputs = ["Rock", "Paper", "Scissor"];
    let computerChoice = outputs[Math.floor(Math.random()*outputs.length)];
    return computerChoice;
}

function playRound(computerSelection){
    
    let playerSelection = prompt("Enter your option: ").toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (computerSelection === "ROCK" && playerSelection === "PAPER")
    {
        console.log("You Won! Paper Beats Rock.");
    }

    else if (computerSelection === "ROCK" && playerSelection === "SCISSOR")
    {
        console.log("You Lost! Rock Beats Scissors.");
    }

    else if (computerSelection === "PAPER" && playerSelection === "SCISSOR")
    {
        console.log("You Won! Scissors Beats Paper.");
    }

    else if (computerSelection === "PAPER" && playerSelection === "ROCK")
    {
        console.log("You Lost! Paper Beats Rock.");
    }

    else if (computerSelection === "SCISSOR" && playerSelection === "ROCK")
    {
        console.log("You Won! Rock Beats Scissors.");
    }

    else if (computerSelection === "SCISSOR" && playerSelection === "PAPER")
    {
        console.log("You Lost! Scissors Beats Paper.");
    }

    else if (computerSelection === "SCISSOR" && playerSelection === "PAPER")
    {
        console.log("You Lost! Scissors Beats Paper.");
    }

    else if (computerSelection === playerSelection)
    {
        console.log("Its a tie");
    }

    else{
        console.log("Enter a valid option.");
    }

}