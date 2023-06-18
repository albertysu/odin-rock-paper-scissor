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

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = getComputerChoice()
    console.log("Player Selected: " + playerSelection)
    console.log("Computer Selected: " + computerSelection)
    if (playerSelection == computerSelection) {
        return 0;
    } else if (playerSelection == "rock" && computerSelection == "scissor" || 
    playerSelection == "paper" && computerSelection == "rock" || 
    playerSelection == "scissor" && computerSelection == "paper") {
        return 1;
    } else {
        return 2;
    }
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