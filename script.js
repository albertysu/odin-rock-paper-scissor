function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    } else if (choice == 1)  {
        return "paper"
    } else {
        return "scissor"
    }
}

function playRound(e) {
    if (!playGame) {
        return
    }
    playerSelection = e.target.id.toLowerCase()

    let computerSelection = getComputerChoice()

    playSelect.textContent = "Player Selected: " + playerSelection
    compSelect.textContent = "Computer Selected: " + computerSelection
    if (playerSelection == computerSelection) {
        winDisplay.textContent = "Tie"
    } else if (playerSelection == "rock" && computerSelection == "scissor" || 
    playerSelection == "paper" && computerSelection == "rock" || 
    playerSelection == "scissor" && computerSelection == "paper") {
        console.log("Player won this round.")
        winDisplay.textContent = "Player won this round."
        playerScore += 1
    } else {
        winDisplay.textContent = "Computer won this round."
        computerScore += 1
    }
    updateScore()
}

function game() {
    let playerScore = 0
    let computerScore = 0
    while (true) {
        let playSelect = prompt("Please choose rock, paper or scissor")
        let num = playRound(playSelect)
        if (num == 0) {
            console.log("Tie")
        } else if (num == 1) {
            console.log("Player won this round.")
            playerScore += 1
        } else {
            console.log("Computer won this round.")
            computerScore += 1
        }
        if (playerScore == 5) {
            console.log("Player has won the game")
            break;
        } else if (computerScore == 5) {
            console.log("Computer has won the game")
            break;
        }
    }
}

function updateScore() {
    playDisplay.textContent = "Player: " + playerScore
    compDisplay.textContent = "Computer: " + computerScore
    if (playerScore == 5) {
        console.log("Player has won the game")
    } else if (computerScore == 5) {
        console.log("Computer has won the game")
    } 
    gameOver()
}

function gameOver() {
    if (playerScore == 5) {
        winDisplay.textContent = "Player has won the game!"
        playGame = false
        return true;
    } else if (computerScore == 5) {
        winDisplay.textContent = "Computer has won the game!"
        playGame = false
        return true;
    } 
    return false;
}

const btns = document.querySelectorAll('button')
console.log(btns.length)
btns.forEach(btn => btn.addEventListener('click', playRound))

let playerScore = 0
let computerScore = 0
let playGame = true;

const playDisplay = document.querySelector("#playScore")
const compDisplay = document.querySelector("#compScore")
const playSelect = document.querySelector("#playSelect")
const compSelect = document.querySelector("#compSelect")
const winDisplay = document.querySelector("#winner")

