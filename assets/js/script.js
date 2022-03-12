// Initial variable declarations
let rockChoice=document.getElementById("choiceRock");
let paperChoice=document.getElementById("choicePaper");
let scissorsChoice=document.getElementById("choiceScissors");
let computerChoice= "";
let result= "";

// 0=rock, 1=paper, 3=scissors
// Function to increase score after the winner is decided

function incrementScore(playerChoiceText, computerChoiceText){
    let oldScorePlayer = parseInt(document.getElementById("playerScore").innerText);
    let oldScoreComputer = parseInt(document.getElementById("computerScore").innerText);
    if(result=="win"){
        document.getElementById("playerScore").innerText = ++oldScorePlayer;
        document.getElementById("showOutcome").innerText = "You won! You chose " + playerChoiceText + ", computer chose " + computerChoiceText + ". ";
    }else if(result=="loss"){
        document.getElementById("computerScore").innerText = ++oldScoreComputer;
        document.getElementById("showOutcome").innerText = "Computer Won. You chose " + playerChoiceText + ", computer chose " + computerChoiceText + ". ";
    }else{
        document.getElementById("showOutcome").innerText = "Draw. You chose " + playerChoiceText + ", computer chose " + computerChoiceText + ". ";
    }
    evaluateWinner();
}

function evaluateWinner(){
    let playerScore1 = parseInt(document.getElementById("playerScore").innerText);
    let computerScore1 = parseInt(document.getElementById("computerScore").innerText);
    if(playerScore1>5){
        alert("You have reached a score of 6--you win!");
        window.location.reload();
    }
    if(computerScore1>5){
        alert("Computer has reached a score of 6--computer wins.");
        window.location.reload();
    }
    
}

// Function finding winner if the user chooses rock
function findWinnerRock(){
    computerChoice=Math.floor(Math.random()*3);
    let computerChoiceText = "rock";
    if(computerChoice==0){
        result = "draw";
    }else if( computerChoice==1){
        result="win";
        computerChoiceText="paper";
    }else{
        result="loss";
        computerChoiceText="scissors";
    }
    // 0=rock, 1=paper, 3=scissors
    incrementScore("rock",computerChoiceText);
}

// Event listener for the rock button
rockChoice.addEventListener("click", findWinnerRock);

// Function finding winner if the user chooses paper
function findWinnerPaper(){
    computerChoice=Math.floor(Math.random()*3);
    let computerChoiceText = "rock";
    if(computerChoice==0){
        result = "win";
    }else if( computerChoice==1){
        result="draw";
        computerChoiceText="paper";
    }else{
        result="loss";
        computerChoiceText="scissors";
    }
    incrementScore("paper", computerChoiceText);
}

// Event listener for the paper button
paperChoice.addEventListener("click", findWinnerPaper);

// Function finding winner if the user chooses scissors
function findWinnerScissors(){
    computerChoice=Math.floor(Math.random()*3);
    let computerChoiceText = "rock";
    if(computerChoice==0){
        result = "loss";
    }else if( computerChoice==1){
        result="win";
        computerChoiceText="paper";
    }else{
        result="draw";
        computerChoiceText="scissors"; 
    }
    incrementScore("scissors", computerChoiceText);
}

// Event listener for the scissors button
scissorsChoice.addEventListener("click", findWinnerScissors);




