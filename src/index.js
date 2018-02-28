//module.exports = 
function check(str, bracketsConfig) {
	// your solution
	let arr = str.split("");
	if (arr.length % 2 !== 0) return false;
	
	let lastOpen, nextClosed;
	let braketsObj = {};
	
	for (let j = 0; j < bracketsConfig.length; j++) {
		braketsObj[bracketsConfig[j][0]] = bracketsConfig[j][1];
	};
	
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == braketsObj["("]){
			lastOpen = arr[i];		
			nextClosed = braketsObj["("];
		} 
		if (arr[i] == braketsObj["{"]){
			lastOpen = arr[i];
			nextClosed = braketsObj["{"];
		} 
		if (arr[i] == braketsObj["["]){
			lastOpen = arr[i];
			nextClosed = braketsObj["["];
		} 
		
		if (lastOpen !== nextClosed && nextClosed == arr[i + 1]){
			arr.splice(i, 2);
			
		} 			
	
	}



if (arr.length == 0) {
	console.log(true);
	return true;
}
else {
	console.log(false);
	return false;
}
}
check('((()))()', [['(', ')']]); // -> true