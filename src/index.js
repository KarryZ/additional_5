//module.exports = 
	function check(str, bracketsConfig) {
  // your solution
	let arr = str.split("");
	if(arr.length == 1) return false;
	let arrLength = arr.length;
	let lastOpen, lastIndexOpen;
	
	for( let i = 0; i < arrLength; i++){
		if(arr[i] == "(" || arr[i] == "{" || arr[i] == "["){
			lastOpen = arr[i];
			lastIndexOpen = i;
			console.log(lastOpen + " " + lastIndexOpen);
			
		}
	}
}

check('((()))()', [['(', ')']]) // -> true
