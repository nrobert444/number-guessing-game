import { compareNumbers } from "../compare.js";

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('test compareNumbers for non-matching too-low result', function(assert) {
    const userGuess = 6;
    const expected = 1;
    const results = compareNumbers(userGuess, 9);
    assert.equal(results, expected);

});
test('test compareNumbers for matching result', function(assert) {
    const userGuess = 6;
    const expected = 0;
    const results = compareNumbers(userGuess, 6);
    assert.equal(results, expected);
});

test('test compareNumbers for non-matching too high result', function(assert) {
    const userGuess = 6;
    const expected = -1;
    const results = compareNumbers(userGuess, 4);
    assert.equal(results, expected);
}); 