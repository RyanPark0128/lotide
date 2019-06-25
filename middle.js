const middle = function(arr) {
    if (arr.length < 3) {
        return []
    } 
    if (arr.length % 2 === 0) {
        const middleArray = []
        middleArray.push(arr[((arr.length / 2) - 1)])
        middleArray.push(arr[(arr.length / 2)])
        return middleArray    
    }
    if (arr.length % 2 === 1) {
        const middleArray = []
        middleArray.push(arr[((arr.length + 1) / 2) - 1])
        return middleArray
    }    
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

assertArrayEqual(middle([11,22,33,44,55]),[33])