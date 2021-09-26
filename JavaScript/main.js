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


// ====================== 객체 예제 문제점
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


// ====================== scope - 1
let scopeX = 1;
let scopeY = 2;

// local scope : 같은 변수를 선언해도 error 없음
{
  let scopeX = 3;
  let scopeY = 4;
}

function scope() {
  let scopeX = 5;
  let scopeY = 6;
}

console.log(scopeX); // 1
console.log(scopeY); // 2


// ===================== scope - 2
let scopeA = 1;
let scopeB = 2;

{
  let scopeC = 3;
  let scopeD = 4;
}

console.log(scopeA);

// ====================== scope - 3
let scopeIndex = 1000; // global scope

// function level scope
function local_scope() {
  let scopeIndex = 100;

  // block level scope
  for (let scopeIndex = 0; scopeIndex < 10; scopeIndex++) {
    console.log(scopeIndex); // 0 ~ 9
  }

  console.log(scopeIndex); // 100
}

local_scope();
console.log(scopeIndex); // 1000;


// ========================= switch 연습문제
const switchDay = 3;
let switchWeek = "";

switch (switchDay) {
  case 1:
    switchWeek = "월요일"; break;
  case 2:
    switchWeek = "화요일"; break;
  case 3:
    switchWeek = "수요일"; break;
  case 4:
    switchWeek = "목요일"; break;
  case 5:
    switchWeek = "금요일"; break;
  case 6:
    switchWeek = "토요일"; break;
  case 7:
    switchWeek = "일요일"; break;
}
console.log(switchWeek); // 수요일


// ========================== 2중 for문
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`${i} + ${j} = ${i + j}`);
  }
}

// output: 
for (let i = 10; i < 3; i++) {
  console.log(i);
}

// for..in
const forinPerson = { fname: "John", Iname: "Bob", age: 25 };

let forinText = "";

for (let x in forinPerson) {
  forinText += forinPerson[x];
} 
console.log(forinText);

// ========================== while
let whileI = 0;
while (whileI < 3) {
  console.log(whileI);
  whileI++;
}

whileI = 0;
do {
  console.log(whileI);
  whileI++;
} while (whileI < 3);

whileI = 4;
do {
  console.log(whileI);
  whileI++;
} while (whileI < 3);