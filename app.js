const button = document.getElementById('game-button');
const guessCountSpan = document.getElementById('guess-count')
const displayWin = document.getElementById('win-result');
const displayLose = document.getElementById('lose-result');
const correctNumber = makeRandom();
const guess = document.getElementById('enter-guess');
let guessesLeft = 4; 


button.addEventListener('click', () => {
    guessesLeft--;
    if (guess > correctNumber) {
        return "You guessed too high";
    } else if (guess < correctNumber) {
        return "You guessed too low";
    }



})






function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) return displayWin;

guessCount--;

}

function makeRandom() {
    return Math.floor(Math.random()) * 10;
}

