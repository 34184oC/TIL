<br>

# Stack

<br>
<br>

## 스택(Stack)
나중에 넣은 데이터가 먼저 나오는 LIFO 기반의 선형 자료 구조

- 구현 메서드
  - 데이터 전체 획득 / 비어 있는지 확인: ```Stack.getBuffer()```, ```Stack.isEmpty()```
  - 추가 / 삭제 / 마지막 데이터 조회 / 크기 확인: ```Stack.push()```, ```Stack.pop()```, ```Stack.peak()```, ```Stack.size()```
  - 데이터 위치 / 존재 여부 확인: ```Stack.indexOf()```, ```Stack.includes()```

<br>
<br>

### ✔ Stack 구현 예제(1)

```js
// Stack() : 생성자 함수로, 초기 데이터 설정
function Stack(array) {
  this.array = array ? array : [];
}

// 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function() {
  return this.array.slice();
};

// 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function() {
  return this.array.length == 0;
};

let stack = new Stack([1, 2, 3]);

console.log(stack);

let data = stack.getBuffer();
console.log(data === stack.arry); // false
console.log(data); // [1, 2, 3]

console.log(stack.array); // false

console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
```

<br>
<br>

### ✔ Stack 구현 예제(2)
젤 중요한 push(), pop()

```js
Stack.prototype.push = function (element) { 
  // push(): 데이터 추가
  return this.array.push(element);
};

Stack.prototype.pop = function () { 
  // pop(): 데이터 삭제
  return this.array.pop();
};

Stack.prototype.peek = function () { 
  // peek(): 가장 끝 데이터 반환
  return this.array[this.array.length - 1];
};

Stack.prototype.size = function () { 
  // size(): 스택 내 데이터 개수 확인
  return this.array.length;
};

let stack = new Stack([1, 2]);

console.log(stack); // Stack { array: [ 1, 2 ] }
stack.push(3);
console.log(stack); // Stack { array: [ 1, 2, 3 ] }

console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1
console.log(stack.size()); // 1
```

<br>
<br>

### ✔ Stack 구현 예제(3)
element 위치 확인, 데이터 존재 여부 확인

```js
Stack.prototype.indexOf = function(ele, position = 0) {
  for (let i = position; i < this.array.length; i++) {
    if (ele === this.array[i]) return 1;
  }

  return -1;
};

Stack.prototype.inCludes = function(ele, position = 0) {
  for (let i = position; i < this.array.length; i++) {
    if (ele === this.arry[i]) return true;
  }

  return false;
};

let stack = new Stack([1, 2, 3]);

console.log(stack.indexOf(1)); // 0
console.log(stack.indexOf(1, 2)); // -1
console.log(stack.includes(1)); // true
console.log(stack.includes(1, 2)); // false
```
