let rockbtn = document.querySelector("#rockbtn");
let paperbtn = document.querySelector("#paperbtn");
let scissorsbtn = document.querySelector("#scissorsbtn");
let compChoiceSpan = document.querySelector("#compChoiceSpan");
let winnerSpan = document.querySelector("#winnerSpan");

rockbtn.addEventListener("click", function(){
    let playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    compChoiceSpan.innerHTML = computerSelection;
    winnerSpan.innerHTML = playRound((playerSelection, computerSelection));
})

paperbtn.addEventListener("click", function(){
    let playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    compChoiceSpan.innerHTML = computerSelection;
    let winner = playRound((playerSelection, computerSelection));
    winnerSpan.innerHTML = winner;
})

scissorsbtn.addEventListener("click", function(){
    let playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    compChoiceSpan.innerHTML = computerSelection;
    let winner = playRound((playerSelection, computerSelection));
    winnerSpan.innerHTML = winner;
})

function getComputerChoice(){
    const compChoiceArr = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random()*3);
    return compChoiceArr[random];
}

function playRound(playerSelection, computerSelection){
    let winner = "";
    if(playerSelection === computerSelection){
        winner = "Its a tie!"; 
    } else if(playerSelection === "Rock" && computerSelection === "Paper"){
        winner = "You Lose";
    } else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        winner = "You Win";
    } else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        winner = "You Lose";
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
        winner = "You Win";
    } else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        winner = "You Lose";
    } else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        winner = "You Win";
    }
    return winner;
}

