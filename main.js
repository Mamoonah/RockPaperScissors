let figures = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return figures[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection) {
        computerScore++;
        playerScore++;
        return 'Tie!'
    } else if ( (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') ||
    (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') ||
    (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') ){
        playerScore++;
        return `You won the round! ${playerSelection.toLowerCase()} beats ${computerSelection}!`
    } else {
        computerScore++;
        return `You lose the round! ${computerSelection} beats ${playerSelection.toLowerCase()}!` 
    };
}

function game(){
    let computerSelection,
        playerSelection;
    let i = 0;

    while(i < 5){
        playerSelection = prompt('Choose your figure')
        if(playerSelection === null){
            alert('Game is finished.');
            return;
        } else if (figures.indexOf(playerSelection.toLowerCase()) < 0){
            alert('Figure does not exist. Choose a different one.');
            continue;
        } else {
            console.log(`Round number ${i+1}.`)
            computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
            console.log('Player score: %s\nComputer score: %s', playerScore, computerScore)
            i++
        } 
    }
    if(playerScore === computerScore){
        console.log('It is a Tie!')
    } else if (playerScore > computerScore){
        console.log(`You won this game! ${playerScore}:${computerScore}`)
    } else {
        console.log(`You lost this game! ${computerScore}:${playerScore}`)
    }
}

game();