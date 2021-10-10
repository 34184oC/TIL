<br>

# Priority Queue

<br>
<br>

## 우선순위 큐(Priority Queue)
우선순위를 고려하여 먼저 넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료 구조

- 우선순위 정렬 방식: 배열 기반, 연결리스트 기반, 힙(Heep) 기반 등의 정렬 방식 존재
- 구현 메서드
  - 데이터 전체 획득 / 비어있는지 확인: ```PriorityQueue.getBuffer()```, ```PriorityQueue.isEmpty()```
  - 데이터 추가 / 삭제: ```PriorityQueue.enqueue()```, ```PriorityQueue.dequeue()```
  - 첫 번째 데이터 / 사이즈 / 전체 삭제: ```PriorityQueue.front()```, ```PriorityQueue.size()```, ```PriorityQueue.clear()```

<br>
<br>

### ✔ Priority Queue 구현 예제(1)

```js
// Element(): 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

// PriorityQueue(): Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

// getBuffer(): 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};

// isEmpty(): 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

console.log(Object.getOwnPropertyDescriptors(Element.prototype));
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));
```

<br>
<br>

### ✔ Priority Queue 구현 예제 (2)

```js
// enqueue(): 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;
  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }

  if (!added) {
    this.array.push(element);
  }
  
  return this.array.length;
};

// dequeue(): 데이터 삭제
PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
console.log(pq);

pq.enqueue("Tom", 1);
pq.enqueue("John", 3);
console.log(pq);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);
```

<br>
<br>

### ✔ Priority Queue 구현 예제(3)

```js
// front(): 가장 첫 데이터 반환
PriorityQueue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0].data;
};

// size(): 큐 내 데이터 개수 확인
PriorityQueue.prototype.size = function () {
  return this.array.length;
};

// clear(): 큐 초기화
PriorityQueue.prototype.clear = function () {
  this.array = [];
};

let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);
pq.enqueue("John", 3);

console.log(pq.getBuffer());

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);

console.log(pq.front());
console.log(pq.size());
```

<br>
<br>

### ✔ Priority Queue 구현 예제(3)

```js
// front(): 가장 첫 데이터 반환
PriorityQueue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0].data;
};

// size(): 큐 내 데이터 개수 확인
PriorityQueue.prototype.size = function () {
  return this.array.length;
};

// clear(): 큐 초기화
PriorityQueue.prototype.clear = function () {
  this.array = [];
};

let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);
pq.enqueue("Tom", 1);
pq.enqueue("John", 3);

console.log(pq.getBuffer());

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);

console.log(pq.front());
console.log(pq.size());
```