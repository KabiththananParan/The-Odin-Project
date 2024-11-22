console.log("Hello World");

function getComputerChoice() {
    let num = Math.floor(Math.random()) + 1;

    if(1 <= num <= 3) {
        if(num == 1) {
            return "Rock";
        }
        else if(num == 2) {
            return "Paper";
        }
        else if(num == 3) {
            return "Scissors";
        }
    }
    else {
        getComputerChoice();
    }
}


function getHumanChoice() {
    let choice = prompt("What is your choice?(Rock, Paper, Scissors)");

    if(choice == "Rock" || choice == "Paper" || choice == "Scissors") {
        return choice;
    }
    else {
        alert("Invalid Choice");
        getHumanChoice();
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(getComputerChoice());
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if(humanSelection == computerSelection) {
        alert("No result!");
    }
    else if( humanSelection == "Rock" && computerSelection == "Paper") {
        alert("You lose! Paper beats Rock");
    }
    else if(humanSelection == "Rock" && computerSelection == "Scissors") {
        alert("You lose! Paper beats Rock");
    }
    
    
}