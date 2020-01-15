export function compareNumbers(newGuess, correctNumber) {
    if (newGuess === correctNumber) {
        return displayWin;
    } else if (newGuess > correctNumber) {
        return "You guessed too high";
        guessesLeft--;
    } else {
        (newGuess < correctNumber) 
            return "You guessed too low";
            guessesLeft--;
    }
};
