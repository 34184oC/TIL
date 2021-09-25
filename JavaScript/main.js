let 안녕 = "하세요";
let hi = "hello";
let HI = "HELLO";

console.log(안녕);
console.log(hi);
console.log(HI);

// 선언 후 할당
let hi1;
hi1 = "hello";

// 선언과 동시에 초기화
let helo = "hello!";

// 한 줄에 변수 여러 개 선언 가능
let name = "name", 
    age = 13, 
    msg = "hello";

// 상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTHDAY = "2020.04.14";


// ================== 자료형 예제
console.log(typeof undefined); // undefined
console.log(typeof 123); // number
console.log(typeof 461n); // bigint
console.log(typeof true); // boolean
console.log(typeof "hi"); // sting
console.log(typeof Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof console.log); // function

let num1 = 123.0;
let num2 = 123.1398;
let num3 = 1 / 0;
let num4 = 1123948n

console.log(num1 - num2); // -0.13979999999999393
console.log((num1 - num2).toFixed(3)); // -0.139
console.log(num3); // Infinity
console.log(num1 / "HI"); // NaN
console.log(typeof num4);// bigint

let str_1 = "hello_1";
let str_2 = "hi";

let num = 3;
let str_3 = `hello_${num}`;

console.log(str_1);
console.log(str_2);
console.log(str_3);


// ======================== 객체 예제
let user = {
  name: "jiyeong", 
  age: 24,
};

console.log(typeof user)
console.log(typeof user.name);
console.log(typeof user.age);

user.age = 40;
console.log(user.age); 

user.weight = 82; // 추가됨..!
console.log(user);

delete user.name;
console.log(user); // 삭제됨..!


// ================== 객체 예제 문제점
let user1 = {
  name: "철수",
  age: 32.,
};

let admin = user1;

admin.name = "park";

console.log(admin.name); // park
console.log(user1.name); // 철수 > park

// 얕은 복사
let user2 = {
  name: "park",
  age: 34,
};

let admin_spread = { ...user }; // user내의 모든 필드 값을 전개(나열) 시켜라

admin_spread.name = "lee";
user2.age = 30;

console.log(admin_spread.name); // lee
console.log(user2.name); // park
console.log(admin_spread.age); // 34
console.log(user2.age); // 30

// 깊은 복사
let user3 = {
  name: "john",
  age: 23,
  sizes: { 
    height: 180, 
    weight: 72,
  },
};

let admin_json = JSON.parse(JSON.stringify(user3));

admin_json.sizes.weight++;
--admin_json.sizes.height;

console.log(admin_json.sizes.weight); // 73
console.log(admin_json.sizes.height); // 179
console.log(user3.sizes.weight); // 72
console.log(user3.sizes.height); // 180 