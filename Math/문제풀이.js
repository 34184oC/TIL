// 1. 등차수열의 항 찾기
function answer1(a, d, n) {
  let index = -1;
  let num;

  for (let i = 1; ; i++) {
    num = a + d * (i - 1);

    if (num > n) break;
    
    if (num == n) {
      index = i;
      break;
    }
  }
  return index;
}
console.log(answer1(1, 2, 7));
console.log(answer1(2, 3, 10));
console.log(answer1(3, 5, 23));

// 2. 잃어버린 카드 찾기
function answer2(a, b, c) {
  let number = 0;

  // 오름차순 정렬
  num = [a, b, c];
  num.sort((x, y) => x - y);

  // d값 받기
  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;
  
  // 자리 찾기
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  number = num[0] + d * index;

  return number;
}
console.log(answer2(1, 7, 10));
console.log(answer2(3, 8, 18));
console.log(answer2(11, 2, 5));
