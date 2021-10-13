function solution(n) {
  let answer = 0;
  let intNum = 0;

  let sum = [];

  for (let i = 0; i <= n; i++) {
    intNum += n.toString(2);
    sum = intNum.slice(0);
    
    if (sum.indexOf('1')) answer += Number(1);
  }
  
  return answer;
}
console.log(solution(3));
