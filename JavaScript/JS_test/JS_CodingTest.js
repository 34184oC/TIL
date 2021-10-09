// Test 1. 구슬 맞추기
function solution1(number, arr) {
  let answer;

  if (number.length == arr.length) answer = 0;
  else {
    answer = number.filter(x => !arr.includes(x));
  }

  return answer;
}


// Test 2. 열매 수확하기
function solution2(fruits) {
  let answer = 0;
  let curSum = 0;

  for (let cur of fruits) {
    curSum += cur;
    if (curSum < 0) curSum = 0;
    
    answer = Math.max(answer, curSum);
  }
  return answer || Math.max(...fruits);
}


// Test 3. 계산기
function solution3(s) {
  let answer = 0;

  return answer = eval(s);
}


// Test 4. 연속된 자연수의 합
function solution4(n) {
  let answer = 0;
  
  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}

// Test 5. 가장많이 등장하는 수
function solution5(s) {
  let arr = s.split("");
  
  let counts = arr.reduce((pv, cv) => {
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  let keys = Object.keys(counts);
  let answer = keys[0];
  keys.forEach((val, idx) => {
    if (counts[val] > counts[answer]) {
      answer = val;
    }
  })

  return answer;
}
console.log(solution5('174771177'));