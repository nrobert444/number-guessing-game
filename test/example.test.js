import { compareNumbers } from "../compare";

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const newGuess = 0;
    const correctNumber = 0;

    const results = compareNumbers(newGuess, correctNumber);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, true);
});
