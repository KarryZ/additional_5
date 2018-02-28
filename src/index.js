//module.exports = 
	function check(str, bracketsConfig) {
  // your solution
	let arr = str.split("");
	if(arr.length == 1) return false;
	let lastOpen, lastIndexOpen, nextClosed;
    let objOfBracket = {};
	
	for( let i = 0; i <  arr.length; i++){
		if(arr[i] == "(" || arr[i] == "{" || arr[i] == "["){
			lastOpen = arr[i];
			nextClosed = arr[i + 1];
            if(lastOpen !== nextClosed){
                if(arr[i] == "(") objOfBracket["("] = ")";
            if(arr[i] == "{") objOfBracket["{"] = "}";
            if(arr[i] == "[") objOfBracket["["] = "]";
			lastIndexOpen = i;
			console.log(lastOpen + " " + lastIndexOpen);
            if(nextClosed == objOfBracket["("]){
                arr.splice(lastIndexOpen, 2);
                console.log(arr);
            } 
            }
            
			
		}
	}
        console.log(arr);
        if(arr.length == 0) return true;
        return false;
}

check('((()))()', [['(', ')']]) // -> true
