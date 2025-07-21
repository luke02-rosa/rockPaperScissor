// variabili per il punteggio

let humanScore = 0 ;
let computerScore = 0 ;

//prima funzione per la scelta del computer

function getComputerChoice(){
 let number = Math.floor(Math.random()*3);
 if(number === 0){
    return "rock"
 } else if (number === 1){
    return "paper"
 } else if (number === 2){
    return "scissors"
}
}

//console.log(getComputerChoice())


// funzione per la persona che sceglie

function getHumanChoice(){
    let answer = prompt("Choose: rock paper scissors").toLowerCase();
   
    if(answer === "rock"){
        return "rock";
    } else if (answer === "paper"){
        return "paper";
    } else if (answer === "scissors"){
        return "scissors";
    }
}
//console.log(getHumanChoice());

// gioco del singolo round 

function playRound(humanChoice,computerChoice){
    
    if (humanChoice === "rock" && computerChoice ==="paper"){
        computerScore++;
        return "You lose, paper beat rock"
    }
    else if (humanChoice === "rock" && computerChoice==="rock"){
        return "draw"
    }
    else if (humanChoice=== "rock" && computerChoice ==="scissors"){
        humanScore++;
        return "You win, rock beat scissors"
    }
    else if (humanChoice === "paper" && computerChoice==="paper"){
        return "draw"
    }
    else if (humanChoice === "paper" && computerChoice==="rock"){
        humanScore++;
        return "You win, paper beat rock"
    } 
    else if (humanChoice === "paper" && computerChoice ==="scissors"){
        computerScore++;
        return "You lose, scissors beat paper"
    }
    else if (humanChoice === "scissors" && computerChoice ==="paper"){
        humanScore++;
        return "You win, scissors beat paper"
    }
    else if (humanChoice === "scissors" && computerChoice==="rock"){
        computerScore++;
        return "You lose, rock beat scissors"
    }
    else if (humanChoice === "scissors" && computerChoice==="scissors"){
        return "draw"
    }
    


}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log("hai scelto : ",humanSelection)
console.log("il computer ha scelto : ",computerSelection)
console.log(playRound(humanSelection,computerSelection));
console.log("il risultato è : ", humanScore, "-" ,computerScore)