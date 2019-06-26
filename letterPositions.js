const letterPositions = function(sentence) {
    const results = {};
    var low = sentence.toLowerCase()
    for (i = 0; i < low.length; i++) {
       if (low[i] in  results === false) {
        results[low[i]] = new Array();
        results[low[i]].push(i)
       } else {
        results[low[i]].push(i)
       }

    }
    delete results[" "]
    console.log(results)
}

   
letterPositions("Scott is still hungry")
