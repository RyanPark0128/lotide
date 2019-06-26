const without = function(arr, exclude) {
      for(i = 0; i < arr.length; i++) {
        for (x = 0; x < exclude.length; x++) {
            if (exclude.includes(arr[i])) {
              arr.splice(i,1)
            }
        }
      }
      return arr
}


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

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]))