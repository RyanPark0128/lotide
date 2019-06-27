const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😀😀😀 Assertion Passed: ${actual}  ===  ${expected}`);
    } else {
      console.log(`😂😂😂 Assertion failed: ${actual}  !==  ${expected}`);
    }
};

const eqObjects = function(object1, object2) {
    const ob1 = (Object.entries(object1))
    const ob2 = (Object.entries(object2))
    
    let count = 0
    if (Object.keys(ob1).length !== Object.keys(ob2).length) {
        return false
    }


    for (i = 0; i < Object.keys(ob1).length; i++) {
        for (x = 0; x < Object.keys(ob2).length; x++) {
            if ((ob1[i].join()) === ob2[x].join()) {
                count += 1
            }
        }
    }
    if (count === Object.keys(ob1).length) { 
        return true
    } else {
        return false
    }
};   



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

console.log(eqObjects(abc, cd2))