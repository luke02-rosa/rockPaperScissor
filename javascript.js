//prima funzione per la scelta del computer
function getComputerChoice(){
 let number = Math.floor(Math.random()*3);
 if(number === 0){
    return "rock"
 } else if (number === 1){
    return "paper"
 } else if (number === 2){
    return "scissor"
}
}

console.log(getComputerChoice())
// funzione per la persona che sceglie
function getHumanChoice(){
    let answer = prompt("Choose: Rock Paper Scissors");
   
    if(answer == "rock"){
        return "rock";
    } else if (answer == "paper"){
        return "paper";
    } else if (answer == "scissors"){
        return "scissor";
    }
}
console.log(getHumanChoice())