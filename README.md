# Rock-Paper-Scissors
## Day:
Day 3️⃣3️⃣ of coding 

## Source:
https://www.theodinproject.com/lessons/foundations-rock-paper-scissors <br>
https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors

## Preview:
<img src='https://github.com/thuongb14/Rock-Paper-Scissors/blob/695f75fa3fb469f24b2d707f064b92709f1ffbb3/10.PNG'>

## Purpose:
To make a simple implementation of grade-school classic “rock paper scissors”.

## Technologies:
<li> Javascript </li>
<li> HTML </li>
<li> CSS </li>

## Tools:
<li> Git </li>
<li> Github </li>

## Outcomes ✅: 
This is my first Javascript program built from scratch. The game is to play with the computer that will randomly generate 'rock', 'paper' or 'scissors' and compare with our choice to give the result whether it is 'Player Win', 'Computer Win' or 'Draw' for each round. Player's score and computer's score is stored and pushed to dipslay. The winner is decided after whether player or computer hits 5 points. 

## What I have learned:
### 1. Dom Manipulation:
This is my first Javascript project to get used to the DOM and DOM methods such as 'Query Selectors', 'Element Creation' and 'Append Elements'. I was confused at first but gradually learn how to think logically and make everything works.
```
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore')
function checkScore() {
    if (playerWin > 0 || computerWin > 0) {
        pScore.textContent = `Player Score: ${playerWin}`;
        cScore.textContent = `Computer Score: ${computerWin}`;
    }
}
```
### 2. Loops:
I have learned how to efficiently use for loop to execute blocks of code multiple times. For this project, is to repeat the round until there is a final winner.

```
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
```
## Final Thoughts:
This is day 33 of learning to code with The Odin Project. It took me 1 week to do both part I and part II of the game - making the game interactive and making the graphical user interface. I have learnt a lot in compared with just doing basic javascript exercises, it requires me to think programatically and how to break down the project into smaller problems and solve one by one. 

> This is Lizzy, into day 33th of coding.

