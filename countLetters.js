const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😀😀😀 Assertion Passed: ${actual}  ===  ${expected}`);
    } else {
      console.log(`😂😂😂 Assertion failed: ${actual}  !==  ${expected}`);
    }
  };

const countLetters = function(word) {
    var low = word.toLowerCase()
    const result = {}
    for (var char of low) {
       result[char] = 0
    }
    for (var char of low) {
        result[char] += 1
    }
    delete result[' '];
    return result 
}
       

    


console.log(countLetters("Lighthouse Lab"))