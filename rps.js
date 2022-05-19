let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let playerWin = 0;
let computerWin = 0;
let tie = 0;


function playGame() {
    for (i = 0; i < 5; i++) {
    playRound()
    }
}

function checkWinner() {
    if (playerWin > computerWin && playerWin > tie) {
        console.log('Winner Winner Chicken Dinner! PLAYER IS THE WINNER!');
    } else if (computerWin > playerWin && computerWin > tie) {
        console.log('You Lose, COMPUTER IS THE WINNER!');
    } else if (playerWin == computerWin) {
        console.log('Tied Battle...');
    } else if (playerWin <= 1 && computerWin <= tie) {
        console.log('You Lose, COMPUTER IS THE WINNER!');
    } else if (computerWin <= 1 && playerWin <= tie) {
        console.log('Winner Winner Chicken Dinner! PLAYER IS THE WINNER!')
    }
} 

//play one round
function playRound() {
    let playerSelection = userPlay();
    let computerSelection = computerPlay();
    if ((playerSelection == rock && computerSelection == scissors) || 
        (playerSelection == paper && computerSelection == rock) ||
        (playerSelection == scissors && computerSelection == paper)) {
            console.log('Player win the round')
            playerWin = playerWin + 1;
    } else if ((playerSelection == rock && computerSelection == paper) ||
        (playerSelection == paper && computerSelection == scissors) ||
        (playerSelection == scissors && computerSelection == rock)) {
            console.log('Computer win the round')
            computerWin = computerWin + 1;
        } else if (playerSelection == computerSelection) {
            console.log('Tied');
            tie = tie + 1;
        }
    }

function userPlay() {
    let input = prompt('Type rock, paper or scissors: ');
//run prompt if cancel
    while (input == null) {
        input = prompt('Please type rock, paper or scissors to play');
    }
//while loop for check input's spelling and prompt if cancel and return value if correct
    input = input.toLowerCase();
    let check = checkInput(input);
    while (check == false) {
        input = prompt('You need to type either rock, paper or scissors: ');
        while (input == null) {
            input = prompt('Try again');
        }
        input = input.toLowerCase();
        check = checkInput(input);
        if (check == true) {
        }
    }
    console.log('You have chose ' + input)
    return input
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

function checkInput(userChoice) {
    if (userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors') {
        return true
    } else {
        return false
    }
}

playGame()
checkWinner()
