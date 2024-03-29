const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`😂😂😂 Assertion failed: ${actual}  !==  ${expected}`);
  }
};

const tail = function(array) {
  console.log(array.slice(1));
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
