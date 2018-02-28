module.exports = function check(str, bracketsConfig) {
    // your solution
    let arr = str.split("");
    if (arr.length == 1) return false;
    let lastOpen, lastIndexOpen, nextClosed;
    let objOfBracket = {};
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (arr[i] == bracketsConfig[j[0]]) {
                lastOpen = arr[i];
                nextClosed = arr[i + 1];
                if (lastOpen !== nextClosed) {
                    lastIndexOpen = i;
                //    console.log(lastOpen + " " + lastIndexOpen);
                    if (nextClosed == bracketsConfig[j[1]]) {
                        arr.splice(lastIndexOpen, 2);
                //        console.log(arr);
                    }
                }
            }
        }
    }
    if (arr.length == 0) return true;
    return false;
}

//check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true