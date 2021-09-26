// 연습문제 1
const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 == 0) sum += i; // 짝수일 경우 다 더하라
}
console.log(sum);

// 연습문제 2
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    const solve2 = i + "x" + j + "=" + i * j; 
    console.log(solve2);
  }
}
