const button = document.getElementById('game-button');
const guessCountSpan = document.getElementById('guess-count')
let guessCount = 4; 




button.addEventListener('click', () => {
    guessCount++;
})