function getComputerChoice(){
  let randomNumber = Math.random() * 100 + 1;
  if (randomNumber <= 33) {
    return 'Rock'
  }
  else if (randomNumber > 33 && randomNumber <= 66){
    return 'Paper'
  }
  else {
    return 'Scissors'
  }
}


function getHumanChoice(){
  let humanChoice = prompt("Choose Rock, Paper, Scissors: ");
 
    if (humanChoice.toLowerCase() === 'rock')
        return 'rock';
    else if (humanChoice.toLowerCase() === 'paper')
        return 'paper';
    else if (humanChoice.toLowerCase() === ' scissors')
        return 'scissors';
    else
    return 'Invalid, please restart.'
    // getHumanChoice();
 }

console.log(getHumanChoice())