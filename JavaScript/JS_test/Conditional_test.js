// 1. 대소비교
function answer1(x, y) {
  let result = "";

  if (x > y) result = ">";
  else if (x < y) result = "<";
  else result = "=";

  return result;
}
console.log(answer1(2, 4));
console.log(answer1(4, -7));
console.log(answer1(2, 2));


// 2. 나누기와 대소비교
function answer2(a, b, c, d) {
  let result;

  if (a/b > c/d) result = 1;
  else if (a/b == c/d) result = 0;
  else result = -1;


  return result;
}
console.log(answer2(14, 2, 6, 6));
console.log(answer2(6, 7, 8, 9));
console.log(answer2(18, 2, 36, 4));


// 3. 윤년 판별기 
function answer3(year) {
  let result;

  // 배수는 나누었을 때 떨어진다 생각하면 편하다!
  if (year % 4 == 0 && year % 100 !== 0) result = true;
  else if (year % 400 == 0) result = true;
  else result = false;

  return result;
}
console.log(answer3(4));
console.log(answer3(100));
console.log(answer3(124));
console.log(answer3(247));
console.log(answer3(400));


// 4. ATM 기기
function answer4(withdraw, total) {
  let result;

  if (withdraw % 5 != 0) result = total;
  else if (withdraw + 0.5 > total) result = total; // 정상적인 인출 불가능
  else result = total - withdraw - 0.5;

  return result;
} 
console.log(answer4(40, 130.0));
console.log(answer4(33, 130.0));
console.log(answer4(300, 300.0));

// 5. 네번째 좌표: 같은 값을 제외한 나머지 값이 좌표가 된다
function answer5(x_arr, y_arr) {
  let result = [];

  if (x_arr[0] == x_arr[1]) result[0] = x_arr[2];
  else if (x_arr[0] == x_arr[2]) result[0] = x_arr[1];
  else if (x_arr[1] == x_arr[2]) result[0] = x_arr[0];

  if (y_arr[0] == y_arr[1]) result[1] = y_arr[2];
  else if (y_arr[0] == y_arr[2]) result[1] = y_arr[1];
  else if (y_arr[1] == y_arr[2]) result[1] = y_arr[0];

  return result;
}
console.log(answer5([5, 5, 8], [5, 8, 5]));
console.log(answer5([3, 1, 1], [2, 1, 2]));
console.log(answer5([7, 7, 3], [4, 1, 1]));