const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`😂😂😂 Assertion failed: ${actual}  !==  ${expected}`);
  }
};

const head = function(array) {
  const first = array[0]
  return first
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
