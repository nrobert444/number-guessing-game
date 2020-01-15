import { compareNumbers } from './compare.js';
//get button element by id for submitting guesses
const button = document.getElementById('game-button');
//get input id for user input guess
const guessInput = document.getElementById('enter-guess')
//get span id to update number of guesses left.
const guessCountSpan = document.getElementById('guess-count');
//get guess-message id to show too high or too low message.
const guessMessage = document.getElementById('guess-message');
//get win-result id to display win message.
const displayWin = document.getElementById('win-result');
//get lose-result id to display lose id.
const displayLose = document.getElementById('lose-result');
//get reset id to add reset button that will run reset function.
const reset = document.getElementById('reset');
// code from MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random, section called "Getting a random integer between two values, inclusive"). random number generator for guessing game.
const winningNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
//initial state of guesses to be decremented.
let guessesLeft = 4;
//update the guesses left and output to the span.
guessCountSpan.textContent = guessesLeft;

//function that compares input and decrements wrong guesses from guess count or displays win/lose messages.
function determineResult (input, remainingGuesses) {
  const result = compareNumbers(input, winningNumber);
  //message to be updated if guess is too high or low.
  showMessage('');
  //decrement guessesLeft.
  guessesLeft--
  //change span tag with updated guess count.
  guessCountSpan.textContent = guessesLeft;
  // disables user input and reveals either win message.
  if (guessesLeft === 0) {
    if (result === 0) {
      disableUserInput(true);
      displayWin.style.visibility = 'visible';
      reset.style.display = 'block';     
    } else {
      disableUserInput(true);
      displayLose.style.visibility = 'visible';
      reset.style.display = 'block';
    }
  } else {
    // disables user input and if counter reaches zero or displays too high/low message if guessesLeft has not reached zero yet.
    if (result === 0) {
      disableUserInput(true);
      displayWin.style.visibility = 'visible';
      reset.style.display = 'block';
    } else {
      if (result === -1) {
        showMessage('Too High');
      } else {
        showMessage('Too Low');
      }
    }
  }
}
// function that checks if the answer is a number and if it's within an acceptable range.
function checkAnswer (answer) {
  if (typeof(answer) !== 'number') {
    alert('Please input a number')
  } else if (answer > 20 || answer < 1) {
    alert('Please input a number between 1 and 20')
  } else {
    determineResult(answer, guessesLeft)
  }
}
//function that shows message if guess is too high/low. 
function showMessage (msg) {
  guessMessage.textContent = msg
}
//function that resets the display, guessCount, etc.
function resetGame () {
  displayWin.style.visibility = 'hidden';
  displayLose.style.visibility = 'hidden';
  reset.style.display = 'none';
  guessInput.value = '';
  guessesLeft = 4;
  guessCountSpan.textContent = guessesLeft;
  disableUserInput(false);
}
//function that disables users ability to input.
function disableUserInput (state) {
  if (state === false) {
    button.removeAttribute('disabled');
    guessInput.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
    guessInput.setAttribute('disabled', '');
  }
}
//event listener for reset button click.
reset.addEventListener('click', event => {
  resetGame();
})
//event listener for submitting user input and checking if input is valid.
button.addEventListener('click', event => {
    let currentGuess = Number(document.getElementById('enter-guess').value);
    checkAnswer(currentGuess);
})





