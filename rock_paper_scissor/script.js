const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 10;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    }
    computerScore++;
    return 'Computer wins!';
}

function updateUI(playerChoice, computerChoice, result) {
    document.getElementById('player-choice').textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    document.getElementById('computer-choice').textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    document.getElementById('game-result').textContent = result;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('rounds-left').textContent = maxRounds - roundsPlayed;
}

function endGame() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    const finalResult = document.getElementById('final-result');
    finalResult.classList.remove('hidden');
    if (playerScore > computerScore) {
        finalResult.textContent = 'Game Over! You are the winner!';
        finalResult.classList.add('text-green-600');
    } else if (computerScore > playerScore) {
        finalResult.textContent = 'Game Over! Computer is the winner!';
        finalResult.classList.add('text-red-600');
    } else {
        finalResult.textContent = 'Game Over! It\'s a tie!';
        finalResult.classList.add('text-blue-600');
    }
}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerChoice) {
    if (roundsPlayed < maxRounds) {
        roundsPlayed++;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        updateUI(playerChoice, computerChoice, result);
        if (roundsPlayed === maxRounds) {
            endGame();
        }
    }
}