// Get human choice 
function getHumanChoice(){
  let humanChoice = prompt("Choose Rock, Paper, Scissor: ");

    if (humanChoice.toLowerCase() === 'rock')
        return 'rock';
    else if (humanChoice.toLowerCase() === 'paper')
        return 'paper';
    else if (humanChoice.toLowerCase() === 'scissor')
        return 'scissor';
    else
    console.log("Invalid, please restart.")
    return getHumanChoice();
   
 }
 

// // Get Computer choice randomly
function getComputerChoice(){
  let randomNumber = Math.random() * 100 + 1;
  if (randomNumber <= 33) {
    return 'rock'
  }
  else if (randomNumber > 33 && randomNumber <= 66){
    return 'paper'
  }
  else if (randomNumber > 66){
    return 'scissor'
  }
}

function playGame(){

let humanScore = 0;
let computerScore = 0;



 // Logic to play a single round of game
function playRound(humanChoice, computerChoice){
  if(humanChoice === 'rock' && computerChoice === 'scissor'){
    ++humanScore;
    console.log("You win! Your choice " + humanChoice +" beats the computer choice " + computerChoice);
    
  }
  else if(humanChoice === 'rock' && computerChoice ==='paper'){
    ++computerScore;
   console.log("You lose! Your choice " + humanChoice +" lose to the computer choice " + computerChoice);
    
  }
  else if(humanChoice === 'rock' && computerChoice ==='rock'){
    console.log("It's a draw");
  }
  else if(humanChoice === 'paper' && computerChoice === 'rock'){
     ++humanScore;
    console.log("You win! Your choice " + humanChoice +" beats the computer choice " + computerChoice);
  }
  else if(humanChoice === 'paper' && computerChoice === 'scissor'){
    ++computerScore;
   console.log("You lose! Your choice " + humanChoice +" lose to the computer choice " + computerChoice);
  }
  else if(humanChoice === 'paper' && computerChoice ==='paper'){
    console.log("It's a draw");
  }
  else if(humanChoice === 'scissor' && computerChoice === 'paper'){
     ++humanScore;
    console.log("You win! Your choice " + humanChoice +" beats the computer choice " + computerChoice);
  }
  else if(humanChoice === 'scissor' && computerChoice === 'rock'){
    ++computerScore;
    console.log("You lose! Your choice " + humanChoice +" lose to the computer choice " + computerChoice);
  }
  else if(humanChoice === 'scissor' && computerChoice ==='scissor'){
    console.log("It's a draw");
  }
  console.log(humanScore);
  console.log(computerScore);
}
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if(humanScore > computerScore){
  console.log("You beat the computer!")
}
else if(humanScore < computerScore){
  console.log("You lost to AI....")
}
else if(humanScore = computerScore){
  console.log("It's a draw.. eww...")
}


}


playGame();




