module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');

    function getConfigByOpeningElement(element) {
        return bracketsConfig.find(x => x[0] == element);
    }
    
    let element, currentElementConfig, lastElementConfig;
    let stack = [];
    let result = true;
    
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        currentElementConfig = getConfigByOpeningElement(element);
        if (stack.length > 0) {
            lastElementConfig = getConfigByOpeningElement(stack[stack.length - 1]);
            if (element == lastElementConfig[1]) {
                stack.pop();
            }
            else if (currentElementConfig) {
                stack.push(element);
            }
            else {
                return false;
            }
        } else {
            if (currentElementConfig) {
                stack.push(element);
            }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

check('[]()', [['(', ')'], ['[', ']']]); // -> true

