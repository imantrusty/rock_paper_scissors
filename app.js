const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }

    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'Nice!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'uhoh! you lost...'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose! Hah!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'nice moves! you win!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'awww man! you suck at this, haha.'
    }
   
    resultDisplay.innerHTML = result
}
