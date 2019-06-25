const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😀😀😀 Assertion Passed: ${actual}  ===  ${expected}`);
    } else {
      console.log(`😂😂😂 Assertion failed: ${actual}  !==  ${expected}`);
    }
  };
  
const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}
const assertArrayEqual = function(arr1, arr2) {
    assertEqual(eqArrays(arr1,arr2), true)
}

assertArrayEqual([1,2,3],[1,2,3])