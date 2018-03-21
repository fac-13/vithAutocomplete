const logic = require('./logic');
const test = require('tape');

test('Testing Tape is working', (t) => {
    t.equal(1, 1, 'Tape is not working');
    t.end();
});

test('Testing logic.searchSuggestion returns an array', (t) => {
    actual = logic.searchSuggestions('a');
    if (Array.isArray(actual)) {
        t.pass();
    } else {
        t.fail(`Expected array instead got ${(typeof actual)}`);
    }
    t.end();
});

test('Testing after processing returns has max of 5 items', (t) => {
    if (logic.searchSuggestions('a').length < 6) {
        t.pass();
    } else {
        t.fail(`After processing should return 5 items instead got ${logic.searchSuggestions('a').length}`);
    }
    t.end();
});

test('Testing first item in result is a string', (t) => {
    actual = logic.searchSuggestions('a')[0];
    expected = 'aardvark';
    t.equal(actual, expected, `Expected aardvark instead got ${actual}`);
    t.end();
});
