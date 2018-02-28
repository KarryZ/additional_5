module.exports = 
    function check(str, bracketsConfig) {
    // your solution
    let arr = str.split("");
    if (arr.length % 2 !== 0) return false;
    let lastOpen, nextClosed;
    
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let configEl = bracketsConfig[j][0];
            if (arr[i] == bracketsConfig[j][0]) {
                lastOpen = arr[i];
                nextClosed = arr[i + 1];
                if (lastOpen !== nextClosed) {
                    //console.log(lastOpen + " " + lastIndexOpen);
                    if (nextClosed == bracketsConfig[j][1]) {
                       arr.splice(i, 2);
                       //console.log(arr);
                    }
                }
            }
        }
    }
    if (arr.length == 0) return true;
    return false;
}

//check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true