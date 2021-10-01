// 1. 최소값 구하기 
function solve1(x, y) {
  // 3항 연산자로 풀이 가능!
  if (x > y) return y;
  else return x;
}
console.log(solve1(16, 3));
console.log(solve1(-3, 1));
console.log(solve1(1000, 525));

// 2. 제곱 구현 
function sovle2(x, y) {
  return x ** y;
}
console.log(sovle2(2, 3));
console.log(sovle2(4, 6));
console.log(sovle2(1, 100));

// 3. 놀이기구 입장 제한
function solve3(user) {
  let permit;
  
  // permit = user.height >= 150으로도 가능하다.
  if (user.height >= 150) permit = true;
  else permit = false;

  return permit;
}
console.log(solve3({ name: "john", age: 27, height: 181 }));
console.log(solve3({ name: "alice", age: 12, height: 148 }));
console.log(solve3({ name: "bob", age: 14, height: 156 }));

// 4. 요일 구하기
function solve4(str) {
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  let day;

  let date = new Date(str); // str을 생성자 객체로 받아옴
  day = week[date.getDay()];

  return day;
}
console.log(solve4("2021-01-27"));
console.log(solve4("2021-02-27"));
console.log(solve4("2021-03-14"));


// 5. 중복 단어 제거
function solve5(arr) {
  let newArr = [];
  
  new Set(arr).forEach((item) => {newArr.push(item)}); // item : new Set한 arr를 받음

  return newArr;
}
console.log(solve5(["john", "alice", "alice"]));


// 6. 배열 내 최대값 구하기
function solve6(arr) {
  let max; // 음수만 있으면 0이 나옴

  max = arr[0]; // 첫 번째 값이랑 비교
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
  }
console.log(solve6([1, 6, 5, 2, 3]));
console.log(solve6([19, 41, 23, -4, 17]));
console.log(solve6([-64, -27, -41, -33, -59]));


// 7. 스팸 메일
function solve7(str) {
  if (str.toLowerCase().includes("advert")) return true;
  else return false;
}
console.log(solve7("RE: Request documents"));
console.log(solve7("[Advertisement] free mobile!"));
console.log(solve7("50% off this week (advertising)"));


// 8. 배열 회전
function solve8(user) {
  let reverse = [];
  for (let i = user.length - 1; i >= 0; i--) {
    reverse.push(user[i]);
  }

  return reverse;
}
console.log(solve8([1, 2, 3, 4]));
console.log(solve8([-1, 6, "hello", -15]));
console.log(solve8(["apple", "banana", "mango"]));


// 9. 문자 교정
function solve9(str) {
  let fixString = [];

  // string에 대해 반복함
  for (let item of str.split(" ")) {
    fixString += item[0].toUpperCase() + item.slice(1) + " "; // slice로 index 1(중복) 없애기
  }

  return fixString;
  
}
console.log(solve9("Hello, My name is john"));
console.log(solve9("This week is closed due to COVID-19"));
console.log(solve9("fifty percent off this week"));


// 10. 2차원 배열의 곱셈 합
function solve10(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}
console.log(solve10([[1], [2], [3]]));
console.log(solve10([[1, 2], [3, 4], [5, 6, 7]]));
console.log(solve10([[5, 1], [0.2, 4, 0.5], [3, 9]]));