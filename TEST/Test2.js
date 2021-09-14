// TEST 2-3
function solve3(num) {
  
	if (num > 100000) return 0;
 	else return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
}

console.log(solve3(534301234)); // 0
console.log(solve3(-29480)); // -8492