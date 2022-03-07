
// // printSea(createSea, true);
// // printSea(createSea);

// createSea();

function createSea(){
    let sea=[];
    for(let i=0; i<25; i++){
        sea[i]=[];
        for(let j=0; j<25; j++){
            sea[i][j]="- ";
        }
    }
    return sea;
}
let sea1 = createSea();
console.log(sea1);

// function printSea(sea, isEnemy=false) {
//     for(let i=0; i<25; i++){
//         let rowStr="  ";
//         for (let cell of sea[i]){
//             if(isEnemy && cell=="O"){
//                 rowStr+="- "
//             }else{
//                 rowStr+= cell + " ";
//             }
//         }
//         console.log(rowStr);
//     }
// }

