import { compareNumbers } from "../compare";

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('test compareNumbers for non-matching result', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userGuess = 6;
    const expected = 9;
    const results = compareNumbers(userGuess, expected);
    assert.equal(results, false);
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    //assert.equal(results, true);
});
