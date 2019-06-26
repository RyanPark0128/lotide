const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😀😀😀 Assertion Passed: ${actual}  ===  ${expected}`);
    } else {
      console.log(`😂😂😂 Assertion failed: ${actual}  !==  ${expected}`);
    }
  };
  
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

const findKeyByValue = function(tvShows, name) {
    var genre = Object.values(tvShows)
    for (i = 0; i < genre.length; i++) {
        if (genre[i] === name) {
            var key = null;
		    for (var prop in tvShows) {
		        if (tvShows.hasOwnProperty(prop)) {
			        if (tvShows[prop] === genre[i]) {
                    key = prop;
                    return key
                    }
                }
            }
        }
    }
    
    
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
