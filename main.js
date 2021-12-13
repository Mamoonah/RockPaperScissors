let figures = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll('.choices div');
let computerPoints = document.querySelector('.computer');
let playerPoints = document.querySelector('.player');
let roundResult = document.querySelector('.round-result');

buttons.forEach(item => {
    item.addEventListener('click', playRound)
})

function computerPlay(){
    return figures[Math.floor(Math.random()*3)]
}

function playRound(){
    playerSelection = event.target.id;
    computerSelection = computerPlay();
    if(playerSelection.toLowerCase() === computerSelection) {
        computerPoints.innerText = `Computer: ${++computerScore}`
        playerPoints.innerText = `Player: ${++playerScore}`
        roundResult.innerText = 'Tie!'
        roundResult.style['color'] = 'black';
    } else if ( (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
    (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
    (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') ){
        playerPoints.innerText = `Player: ${++playerScore}`
        roundResult.innerText = `You won the round! ${playerSelection.toLowerCase()} beats ${computerSelection}!`
        roundResult.style['color'] = 'green';
    } else {
        computerPoints.innerText = `Computer: ${++computerScore}`
        roundResult.innerText = `You lose the round! ${computerSelection} beats ${playerSelection.toLowerCase()}!` 
        roundResult.style['color'] = 'red';
    };

    if(playerScore >= 5 || computerScore >= 5){
        endGame();
    }
}


function endGame(){
    let popupBackground = document.createElement('div');
    let popupContainer = document.createElement('div');
    let gameResult = document.createElement('span')
    let body = document.querySelector('body');
    let resetButton = document.createElement('button');

    resetButton.style['margin'] = '10px';
    resetButton.innerText = 'Reset';
    roundResult.innerText = `*** Round result ***`

    if(playerScore === computerScore){
        gameResult.innerText = 'It is a Tie!'
    } else if (playerScore > computerScore){
        gameResult.innerText = `You won this game! ${playerScore}:${computerScore}`
    } else {
        gameResult.innerText = `You lost this game! ${playerScore}:${computerScore}`
    }

    popupBackground.classList.add('popup-background');
    popupContainer.classList.add('popup-container');
    popupContainer.appendChild(gameResult);
    popupContainer.appendChild(resetButton);
    popupBackground.appendChild(popupContainer);
    body.appendChild(popupBackground);   

    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        computerPoints.innerText = `Computer: 0`
        playerPoints.innerText = `Player: 0`
        body.removeChild(popupBackground)
        roundResult.style['color'] = 'black';
    })
}