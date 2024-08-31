//We added button to play the game, now need to get score and words on page. Bonus to only play 5 rounds and stop with a restart button!
const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;




const buttonEl = document.querySelectorAll('button')
const playerScoreEl = document.querySelector('#playerScore')
const computerScoreEl = document.querySelector('#computerScore')
const resultSectionEl = document.querySelector("#roundAndGameResult")
const parentResultEl = document.querySelector("#results")

buttonEl.forEach(buttonEl =>{
    buttonEl.addEventListener('click', () =>{
        btnId = buttonEl.id;
        playGame();

    });
})







function computerChoices(){
   const random = Math.floor(Math.random() * choices.length);
   return choices[random];
}



function playGame(){
    


// function humanChoice(){
//     let getChoice = prompt('Input a choice: ');
//     if(getChoice === 'rock'){
//         return 'rock';
//     }
//     else if(getChoice === 'paper'){
//         return 'paper';
//     }
//     else if(getChoice === 'scissors'){
//         return 'scissors';
//     }
//     else {
//          console.log('invalid')
//          humanChoice();

//     }

// }

function playRound(humanSelection, computerSelection){
    

    if(humanSelection === computerSelection){
        results = `It\'s a draw`;
    }
    else if( humanSelection === 'rock' && computerSelection === 'scissors'){
        humanScore++;
       
        results = 'YOU WON THE ROUND';
       
    }
    else if( humanSelection === 'paper' && computerSelection === 'rock'){
        humanScore++;
        results = 'YOU WON THE ROUND';
    }
    else if( humanSelection === 'scissors' && computerSelection === 'paper'){
        humanScore++;
        results = 'YOU WON THE ROUND';
    }
    else if(humanSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        results = 'AI WON THE ROUND';
    }
    else if(humanSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        results = 'AI WON THE ROUND';
    }
    else if(humanSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        results = 'AI WON THE ROUND';
    }
    
}

// loop to play unil a best of 5 score is reached, no draw
// for(let totalScore = 0; humanScore + computerScore < 5; totalScore++){
//     playRound(humanChoice(), computerChoices());
    
   
    
// }






// loop to play only 5 rounds
// for(let i = 0; i < 5; i++){
//     playRound(button.id, computerChoices());
//     console.log(i)
   
    
// }
playRound(btnId, computerChoices())
playerScoreEl.textContent = `PLAYER SCORE: ${humanScore}`;
computerScoreEl.textContent = `COMPUTER SCORE: ${computerScore}`;
resultSectionEl.textContent = results;

const p = document.createElement("p");
parentResultEl.appendChild(p);
if(humanScore === 5){
   
    p.textContent = "You win, humans are smarter!"
    buttonEl.forEach(buttonEl => {
        buttonEl.disabled = true;
    });
    restartButton = document.createElement("button");
    restartButton.textContent = "RESTART!";
    parentResultEl.appendChild(restartButton);
    restartButton.addEventListener("click", () => {
        location.reload();
    })
}
else if(computerScore === 5){
    p.textContent ='Computer wins, you lose! Womp Womp.';
    buttonEl.forEach(buttonEl => {
        buttonEl.disabled = true;
    });
    restartButton = document.createElement("button");
    restartButton.textContent = "RESTART!";
    parentResultEl.appendChild(restartButton);
    restartButton.addEventListener("click", () => {
        location.reload();
    });
}






}











