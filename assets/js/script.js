let rockChoice=document.getElementById("choiceRock");
let paperChoice=document.getElementById("choicePaper");
let scissorsChoice=document.getElementById("choiceScissors");
let computerChoice= "";
let result= "";

// 0=rock, 1=paper, 3=scissors

function incrementScore(){
    let oldScorePlayer = parseInt(document.getElementById("playerScore").innerText);
    let oldScoreComputer = parseInt(document.getElementById("computerScore").innerText)
    if(result=="win"){
        document.getElementById("playerScore").innerText = ++oldScorePlayer;
        document.getElementById("showOutcome").innerText = "You won!";
    }else if(result=="loss"){
        document.getElementById("computerScore").innerText = ++oldScoreComputer;
        document.getElementById("showOutcome").innerText = "Computer Won.";
    }else{
        document.getElementById("showOutcome").innerText = "Draw.";
    }
}

function findWinnerRock(){
    // preventDefault();
    // rockChoice.addEventListener("click", findWinnerRock());
    computerChoice=Math.floor(Math.random()*3);
    if(computerChoice==0){
        result = "draw";
    }else if( computerChoice==1){
        result="win";
    }else{
        result="loss";
    }
    incrementScore();
}

rockChoice.addEventListener("click", findWinnerRock());

function findWinnerPaper(){
    computerChoice=Math.floor(Math.random()*3);
    if(computerChoice==0){
        result = "win";
    }else if( computerChoice==1){
        result="draw";
    }else{
        result="loss";
    }
    incrementScore();
}

paperChoice.addEventListener("click", findWinnerPaper);

function findWinnerScissors(){
    computerChoice=Math.floor(Math.random()*3);
    if(computerChoice==0){
        result = "loss";
    }else if( computerChoice==1){
        result="win";
    }else{
        result="draw"; 
    }
    incrementScore();
}

scissorsChoice.addEventListener("click", findWinnerScissors);




