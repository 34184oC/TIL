<br>

# Linked List

<br>

## 연결 리스트(Linked List)
각 노드가 데이터와 포인터를 가지며 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조

- 구현 메서드
 - 노드 개수 / 빈 노드 확인 / 출력: ```LinkedList.size()```, ```LinkedList.isEmpty()```, ```LinkedList.printNode()```
 - 노드 추가: ```LinkedList.append()```, ```LinkedList.insert()```
 - 노드 삭제: ```LinkedList.remove()```, ```LinkedList.removeAt()```
 - 데이터 위치 확인: ```LinkedList.indexOf()```

 <br>
 <br>

### ✔ Linked List 예제(1)
노드 추가하기

```js
// data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// head, length를 가진 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 check
LinkedList.prototype.size = function() {
  return this.length;
}

// 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function() {
  return this.length === 0;
}

let ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll) // head에 node추가

// 새로운 객체 만들기 
ll.head.next = new Node(456);
ll.length++;
console.log(ll);
```

<br>
<br>

### ✔ Linked List 예제(1)
 연결 리스트 끝에 노드에 추가하기

```js
function Node(data) {
  this.data = data;
  this.next = null;
}

// head, length를 가진 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}
// printNode(): node 출력
LinkedList.prototype.printNode = function() {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
};

// append(): 연결리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function(value) {
  let node = new Node(value),
  current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    // 마지막까지 쭉 탐색하기
    while (current.next != null) {
      current = current.next;
    }
    current.next = node; // 새 노드 추가
  }
  this.length++;
}

let ll = new LinkedList();

ll.append(1);
ll.append(10);
ll.append(100);

ll.printNode();
console.log(ll.size());
```

<br>
<br>

### ✔ Linked List 예제(3)
```js

```

<br>
<br>

### ✔ Linked List 예제(1)
```js

```

<br>
<br>

### ✔ Linked List 예제(1)
```js

```

<br>
<br>

### ✔ Linked List 예제(1)
```js

```

<br>
<br>

### ✔ Linked List 예제(1)
```js

```

<br>
<br>