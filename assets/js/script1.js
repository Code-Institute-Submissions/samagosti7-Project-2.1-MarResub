// creation of player array
let pArray=["0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0"];

let _pArray = [
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
console.log(_pArray[0][0]);
// _pArray[0][0]="M"

function outputPlayer(){
    let _html="";
    for (let i=0; i<_pArray.length; i++){
        for (let j=0; j<_pArray[i].length; j++){
            _html=_html+_pArray[i][j]+" | ";       
        }
        _html=_html+"<br>";
    }
    console.log(_html);
    document.getElementById("playerArray").innerHTML=_html;
}
outputPlayer();

// document.getElementById("playerArray").innerHTML=pArray;
let pShip = prompt('There are 25 possible ship locations.  Pick your location!', '7');
let pLocation=((parseInt(pShip))-1);
if(pArray[pLocation]=="0 <br>"){
    pArray[pLocation]="X <br>";
}else{
    pArray[pLocation]="X";
}
// document.getElementById("playerArray").innerHTML=pArray;

// creation of computer array
let cArray=["0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0"];
// document.getElementById("computerArray").innerHTML=cArray;
let cLocation=Math.floor(Math.random()*25);
if(cArray[cLocation]=="0 <br>"){
    cArray[cLocation]="X <br>";
}else{
    cArray[cLocation]="X";
}
console.log(cArray);
 
// creation of display array for computer array
let guessArray=["0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0 <br>",
"0","0","0","0","0"];
document.getElementById("guessArray").innerHTML=guessArray;


// game starting button, function, and event listener
let pButton = document.getElementById("playButton");
let gameOn=false;

function turnGameOn(){
    gameOn=true;
    // return gameOn;
}

pButton.addEventListener("click", turnGameOn());

// player guess function
function initiateGame(){
    while(gameOn){
        alreadyGuessed=[];
        let guess = prompt("Make your guess!", "6");
        guessInt=((parseInt(guess))-1);
        if(alreadyGuessed.includes(guessInt)){
            // let guessed=document.getElementById("errorMessage");
            alert("You have already guessed that location.  Guess something new!")
            continue;
        } else if(guessInt==cLocation){
            alert("Hit! Congratulations, you win. Click home to return to homepage.");
            gameOn=false;
        }else{
            alreadyGuessed.push(guessInt);
            if(guessArray[guessInt]=="X <br>"){
                guessArray[guessInt]="M <br>"
            }else{
                guessArray[guessInt]="M";
            }
            document.getElementById("guessArray").innerHTML=guessArray;
            const alertEnd=alert("Miss! Computer will guess, then it's your turn again.");
            }
            // let guessed=document.getElementById("alreadyGuessed");
        }
    }
// computer guess function
alertEnd.addEventListener("click", computerGuess);
let cAlreadyGuessed = [];
function computerGuess(){
    let cGuess=Math.floor(Math.random()*25);
    while (cAlreadyGuessed.includes(cGuess)){
        cGuess=Math.floor(Math.random()*25);
    }
    if(cGuess==pLocation){
        alert("Computer won! Your ship is sunk, game over.");
        gameOn=false;
    }else{
        alertRestart("Computer missed! Your turn again.");
        cAlreadyGuessed.push(cGuess);
    }
}

alertRestart.addEventListener("click", initiateGame);

















