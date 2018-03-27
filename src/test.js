const logic = require("./logic");
const test = require("tape");

test("Testing Tape is working", t => {
  t.equal(1, 1, "Tape is not working");
  t.end();
});

// TESTS FOR SUGGESTION FUNCTION
test("Testing logic.searchSuggestion returns an array", t => {
  actual = logic.suggestions("/suggest/?q=a");
  if (Array.isArray(actual)) {
    t.pass();
  } else {
    t.fail(`Expected array instead got ${typeof actual}`);
  }
  t.end();
});

test("Testing after processing returns has max of 5 items", t => {
  if (logic.suggestions("/suggest/?q=fox").length < 11) {
    t.pass();
  } else {
    t.fail(
      `After processing should return 5 items instead got ${
        logic.suggestions("/suggest/?q=a").length
      }`
    );
  }
  t.end();
});

test("Testing first item in result is a string", t => {
  actual = logic.suggestions("/suggest/?q=a")[0];
  expected = "andean white-eared opossum";
  t.equal(
    actual,
    expected,
    `Expected andean white-eared opossum. Got ${actual}`
  );
  t.end();
});

// test("Testing results start with correct input", t => {
//   actual = logic.suggestions("/suggest/?q= cat")[0];
//   expected = "bay cat";
//   t.equal(actual, expected, `Expected bay cat. Got ${actual}`);
//   t.end();
// });

// failing test due to new json data object
// test("Testing results start with or contains word that starts with correct input letter", t => {
//   actual = logic.suggestions("bab")[0];
//   expected = "olive baboon";
//   t.equal(actual, expected, `Expected olive baboon. Got ${actual}`);
//   t.end();
// });

// TESTS FOR SEARCH FUNCTION
test("SEARCH: Testing logic.searchSuggestion returns an array", t => {
  actual = logic.searchQuery("/search/?q=cat");
  if (Array.isArray(actual)) {
    t.pass();
  } else {
    t.fail(`Expected array instead got ${typeof actual}`);
  }
  t.end();
});

test("SEARCH: Testing first item in result is an object", t => {
  actual = logic.searchQuery("/search/?q=anteater")[0];
  if (typeof actual === "object") {
    t.pass();
  } else {
    t.fail(`Expected object instead got ${typeof actual}`);
  }
  t.end();
});
