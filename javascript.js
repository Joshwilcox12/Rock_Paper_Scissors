const humanScore = 0;
const computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
    return 'Invalid, please restart.'
    // getHumanChoice();
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

 // Logic to play a single round of game
function playRound(humanChoice, computerChoice){
  if(humanChoice === 'rock' && computerChoice === 'scissor'){
    return "You win! Rock beats scissor!"
  }
  else if(humanChoice === 'rock' && computerChoice ==='paper'){
    return "You lose! paper beats rock!"
  }
  else if(humanChoice === 'rock' && computerChoice ==='rock'){
    return "It's a draw"
  }
  else if(humanChoice === 'paper' && computerChoice === 'rock'){
    return "You win! Paper beats rock!"
  }
  else if(humanChoice === 'paper' && computerChoice === 'scissor'){
    return "You lose! Scissor beats paper!"
  }
  else if(humanChoice === 'paper' && computerChoice ==='paper'){
    return "It's a draw"
  }
  else if(humanChoice === 'scissor' && computerChoice === 'paper'){
    return "You win! Scissor beats paper!"
  }
  else if(humanChoice === 'scissor' && computerChoice === 'rock'){
    return "You lose! Rock beats Scissor!"
  }
  else if(humanChoice === 'scissor' && computerChoice ==='scissor'){
    return "It's a draw"
  }
}

console.log(playRound(humanSelection, computerSelection))






