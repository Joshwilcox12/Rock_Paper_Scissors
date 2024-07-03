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


console.log(getComputerChoice())