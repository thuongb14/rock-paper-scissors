let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let playerWin = 0;
let computerWin = 0;

function computerPlay() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        return rock;
    } else if (choice == 1) {
        return paper;
    } else if (choice == 2) {
        return scissors;
    }
}

const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore')
function checkScore() {
    if (playerWin > 0 || computerWin > 0) {
        pScore.textContent = `Player Score: ${playerWin}`;
        cScore.textContent = `Computer Score: ${computerWin}`;
    }
}

<<<<<<< HEAD

function checkWinner() {
    for (i = 0; i < 6; i++) {
        if (playerWin == 5) {
            conclusion.textContent = 'Hip Hip Hooray, You WON!';
            playAgain()
            disableChoices()
        } else if (computerWin == 5) {
            conclusion.textContent = 'Oh no, you lose';
            playAgain()
            disableChoices()
        }
    }
}

function playAgain() {
    const playAgain = document.querySelector('.playAgain')
        playAgain.textContent = 'Play Again'
    const buttonStyle = document.querySelector('.playAgain').style
        buttonStyle.backgroundColor ='red';
        buttonStyle.padding = '20px 30px 20px 30px';
        
        playAgain.addEventListener('click', () => {
            window.location.reload();
    })
}

function disableChoices() {
    choices.forEach((img) => {
        img.remove()
    })
}

const pChoice = document.querySelector('.playerChoice')

const choices = document.querySelectorAll('img')
choices.forEach((img) => {
    img.addEventListener('click', function() {
        playerSelection = img.className;
        playRound()
        pChoice.textContent = playerSelection;
        checkScore()
        checkWinner()
    })
})

const cChoice = document.querySelector('.computerChoice')
const showResult = document.querySelector('#final')

function playRound() {
    let computerSelection = computerPlay()
    cChoice.textContent = computerSelection
    if ((playerSelection == 'rock' && computerSelection == scissors) || 
        (playerSelection == 'paper' && computerSelection == rock) ||
        (playerSelection == 'scissors' && computerSelection == paper)) {
            showResult.textContent = 'You win, ' + playerSelection + ' beats ' + computerSelection
            playerWin = playerWin + 1;
            return;
    } else if 
        ((playerSelection == 'rock' && computerSelection == paper) ||
        (playerSelection == 'paper' && computerSelection == scissors) ||
        (playerSelection == 'scissors' && computerSelection == rock)) {
            showResult.textContent = 'You lose, ' + computerSelection + ' beats ' + playerSelection
            computerWin = computerWin + 1;
            return;
    } else if 
        (playerSelection == computerSelection) {
            showResult.textContent = 'It\'s a draw';
            return;
    }
}


