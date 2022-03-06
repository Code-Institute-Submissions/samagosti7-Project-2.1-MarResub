let pArray=["0","0","0","0","0 <br>","0","0","0","0","0 <br>","0","0","0","0","0 <br>","0","0","0","0","0 <br>","0","0","0","0","0"];
document.getElementById("playerArray").innerHTML=pArray;
let pShip = prompt('There are 25 possible ship locations.  Pick your location!', '7');
let pLocation=parseInt(pShip);
if(pArray[pLocation]=="0 <br>"){
    pArray[pLocation]="X <br>";
}else{
    pArray[pLocation]="X";
}


let cArray=["0","0","0","0","0 <br>","0","0","0","0","0 <br>","0","0","0","0","0 <br>","0","0","0","0","0 <br>","0","0","0","0","0"];
document.getElementById("computerArray").innerHTML=cArray;
let cLocation=Math.floor(Math.random()*25);
if(cArray[cLocation]=="0 <br>"){
    cArray[cLocation]="X <br>";
}else{
    cArray[cLocation]="X";
}

let pButton = document.getElementById("playButton");
pButton.addEventListener("click", initiateGame());

let gameOn=true;

function initiateGame(){
    while(gameOn){
        alreadyGuessed=[];
        document.getElementById('')
        let guess = prompt('Make your guess');
        guessInt=parseInt(guess);
        if(alreadyGuessed.includes(guessInt)){

        }
        if(cArray[guessInt]=="X <br>"){
            gameOn=false;
            document.write("Congratulations! You win. Click home to return to homepage.");
        }else if(cArray[guessInt]=="X"){
            gameOn=false;
            document.write("Congratulations! You win. Click home to return to homepage.");
        }else{
            alreadyGuessed.push(guessInt)
        }

    }
    
}



















