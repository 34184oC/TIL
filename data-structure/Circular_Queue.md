<br>

# Circular Queue

<br>
<br>

## 원형 큐(Circular Queue)
원형 형태를 가진 FIFO 기반 선형 자료 구조

- length보다 길게 넣을 경우 삭제 시키기(메서드 사용)
- 구현 메서드
  - 데이터가 다 찼는지 / 비어있는지 확인: ```CircularQueue.isFull()```, ```PriorityQueue.isEmpty()```
  - 데이터 추가 / 삭제 / 반환: ```CircularQueue.enqueue()```, ```CircularQueue.dequeue()```, ```CircularQueue.getBuffer()```
  - 첫 번째 데이터 / 사이즈 / 전체 삭제: ```CircularQueue.front()```, ```CircularQueue.size()```, ```CircularQueue.clear()```

<br>
<br>

### ✔ Circular Queue 구현 예제(1)

```js
// CircularQueue(): 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(arr = [], size = 5) {
  this.arr = arr;
  this.size = arr.length > size ? arr.length : size;
  this.length = arr.legnth;
  this.head = 0;
  this.tail = arr.length;
}

// getBuffer(): 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.arr.slice();
}

// isEmpty(): 데이터 비어있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length == 0;
};

// isFull(): 데이터 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
};

let cq = new CirculartQueue([1, 2, 3]);
console.log(cq);

console.log(cq.isEmpty());
console.log(cq.isFull());
console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));
```

<br>
<br>

### ✔ Circular Queue 구현 예제 (2)

```js
// enqueue(): 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;

  this.array[this.tail] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;

  return true;
};

// dequeue(): 데이터 삭제
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head];
  this.head = (this.head + 1) % this.size;
  this.length--;

  return element;
};

let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq);

console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
```

<br>
<br>

### ✔ Priority Queue 구현 예제(3)

```js
const DEFAULT_SIZE = 5;

// front(): 가장 첫 데이터 반환
CircularQueue.prototype.front = function () {
  return this.length == 0 ? undefined : this.array[this.head];
};

// dataSize(): 큐 내 데이터 개수 확인
CircularQueue.prototype.dataSize = function () {
  return this.length;
};

// clear(): 큐 초기화
CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

let cq = new CircularQueue([1, 2, 3, 4]);
console.log(cq);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq.dequeue());
console.log(cq.dequeue());
console.log(cq);

cq.enqueue(6);
console.log(cq);
console.log(cq.front());
console.log(cq.dataSize());

cq.clear(10);
console.log(cq);
```