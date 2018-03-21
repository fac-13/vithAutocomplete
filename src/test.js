const logic = require('./logic');
const test = require('tape');
const animals = require('./animals.json');

test('Testing Tape is working', (t) => {
    t.equal(1, 1, 'Tape is working');
    t.end();
})
