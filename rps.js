let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let playerWin = 0;
let computerWin = 0;
let tie = 0;

//button1 chose Rock => when click, run Playround with userPlay() is rock, computerPlay is unknown

function checkWinner() {
    for (i = 0; i < 6; i++) {
        if (playerWin == 5) {
        alert('The Winner is Player!')
        return
        } else if (computerWin == 5) {
        alert ('The Winner is Computer')
        return
        }
    }
}


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.className;
    });
    button.addEventListener('click', playRound);
    button.addEventListener('click', checkPScore);
    button.addEventListener('click', checkCScore);
    window.addEventListener('click', checkWinner)

})


const pScore = document.querySelector('#playerScore')
function checkPScore() {
    if (playerWin > 0) {
        pScore.textContent = `Player Score: ${playerWin}`;
    } else return
}

const cScore = document.querySelector('#computerScore')
function checkCScore() {
    if (computerWin > 0) {
        cScore.textContent = `Computer Score: ${computerWin}`;
    } else return
}

//play one round
    function playRound() {
        let computerSelection = computerPlay();
        if ((playerSelection == 'rock' && computerSelection == scissors) || 
        (playerSelection == 'paper' && computerSelection == rock) ||
        (playerSelection == 'scissors' && computerSelection == paper)) {
            console.log('Player win the round')
            playerWin = playerWin + 1;
    } else if ((playerSelection == 'rock' && computerSelection == paper) ||
        (playerSelection == 'paper' && computerSelection == scissors) ||
        (playerSelection == 'scissors' && computerSelection == rock)) {
            console.log('Computer win the round')
            computerWin = computerWin + 1;
        } else if (playerSelection == computerSelection) {
            console.log('Tied');
            tie = tie + 1;
        }
    }

function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if (random == 0) {
        return rock;
    } else if (random == 1) {
        return paper;
    } else if (random == 2) {
        return scissors
    }
}
