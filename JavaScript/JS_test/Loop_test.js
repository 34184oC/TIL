// 1. 별별별
function answer1(num) {
  let result;

  return result = "*".repeat(num); // for문 사용 가능 :3
}
console.log(answer1(5));
console.log(answer1(7));
console.log(answer1(12));

// 2. 두 수 사이 숫자
/* 풀이: 조건문안에서 x > y 일 경우
반복문을 돌리게 했지만 두 번 돌릴 필요 없이
조건문에서 변수 값만 바꿔주면(x -> y, y -> x)
반복문을 한 번만 돌릴 수 있다! */
function answer2(x, y) {
  let result = [];

  /* if (x > y) {
    let t = x;
    x = y;
    y = t; (=x)
  } */
  if (x > y) {
    for (let i = y; i <= x; i++) {
      result.push(i);
    }
  }

  for (let i = x; i <= y; i++) {
    result.push(i);
  }
  return result;
}
console.log(answer2(3, 7));
console.log(answer2(8, 3));
console.log(answer2(12, 10));


// 3. 반 평균
function answer3(score) {
  let average = 0;

  for (let i = 0; i < score.length; i++) {
    average += score[i] / score.length;
  }

  /* Math.round도 소숫점 제어는 가능하지만 82.00으로 안나온다! 
  풀이에선 toFixed(2)를 사용하였다. */
  return average =  Math.round(average * 100) / 100; 
}
console.log(answer3([80, 95, 65, 70, 100]));
console.log(answer3([82, 77, 51, 64, 73, 90, 80]));
console.log(answer3([100, 71, 59, 88, 72, 75, 91, 93]));


// 4. 핸드폰 판매
function answer4(employee) {
  let employee__id;
  let max = 0;

  for (let i = 0; i < employee.length; i++) {
    if (employee[i] > max) {
      max = employee[i]; // 현재 판매한 핸드폰 개수 업데이트 (for문이니까!!!!!)
      employee__id = i + 1; // 순서도 같이 업데이트
    }
  }
  return employee__id;
}
console.log(answer4([3, 7, 9, 6, 1]));
console.log(answer4([2, 7, 1, 4, 3, 0, 5]));
console.log(answer4([7, 5, 0, 1, 2, 12, 6]));


// 5. 무한 뺄셈
function answer5(s, e) {
  let sequence = [];
  let num;

  sequence.push(s);
  sequence.push(e);

  while (true) {
    num = s - e;
    s = e;
    e = num;

    if (e < 0) break;

    sequence.push(e);
  }
  
  return sequence;
}
console.log(answer5(9, 3));
console.log(answer5(6, 3));
console.log(answer5(13, 7));