// console.log("Hello World");

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

// console.log(getComputerChoice());
// console.log(getHumanChoice())
console.log(humanSelection);
console.log(computerSelection);

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if(humanSelection == computerSelection) {
        alert("No result!");
    }
    else if( humanSelection == "Rock" && computerSelection == "Paper") {
        alert("You lose! Paper beats Rock");
        computerScore++;
    }
    else if(humanSelection == "Rock" && computerSelection == "Scissors") {
        alert("You Win! Rock beats Scissors");
        humanScore++;
    }
    else if( humanSelection == "Paper" && computerSelection == "Scissors") {
        alert("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if(humanSelection == "Paper" && computerSelection == "Rock") {
        alert("You Win! Paper beats Rock");
        humanScore++;
    }
    else if( humanSelection == "Scissors" && computerSelection == "Rock") {
        alert("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if(humanSelection == "Scissors" && computerSelection == "Paper") {
        alert("You Win! Scissors beats Paper");
        humanScore++;
    }
    return humanScore, computerScore;   
}

function playGame() {
    for(let i = 1; i <=5; i++) {
        playRound(humanSelection, computerSelection);

        if(humanScore > computerScore) {
            alert(`You Wins. Score=> {humanScore} : {computerScore}`);
        }
        else if(humanScore == computerScore) {
            alert(`Game Draw. Score=> {humanScore} : {computerScore}`);
        }
        else {
            alert(`Computer Wins. Score=> {humanScore} : {computerScore}`);
        }
    }
}