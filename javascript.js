const humanScore = 0;
const computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Get human choice 
function getHumanChoice(){
  let humanChoice = prompt("Choose Rock, Paper, Scissors: ");
 
    if (humanChoice.toLowerCase() === 'rock')
        return 'rock';
    else if (humanChoice.toLowerCase() === 'paper')
        return 'paper';
    else if (humanChoice.toLowerCase() === 'scissors')
        return 'scissors';
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
  else {
    return 'scissors'
  }
}

 // Logic to play a single round of game
function playRound(humanChoice, computerChoice){
  if(humanChoice === 'rock' && computerChoice === 'scissors'){
    return "You win! Rock beats scissors!"
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
  else if(humanChoice === 'paper' && computerChoice === 'scissors'){
    return "You lose! Scissors beats paper!"
  }
  else if(humanChoice === 'paper' && computerChoice ==='paper'){
    return "It's a draw"
  }
  else if(humanChoice === 'scissors' && computerChoice === 'paper'){
    return "You win! Scissor beats paper!"
  }
  else if(humanChoice = 'scissors' && computerChoice === 'rock'){
    return "You lose! Rock beats Scissor!"
  }
  else if(humanChoice === 'scissors' && computerChoice ==='scissors'){
    return "It's a draw"
  }
}

console.log(playRound(humanSelection, computerSelection))






