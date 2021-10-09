<br>

# Double Linked List

<br>

## 이중 연결 리스트(Double Linked List)
각 노드가 데이터와 포인터를 가지며, 두 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조 (이전 값 접근 가능!)

- 구현 메서드
 - 노드 개수 / 빈 노드 확인: ```DoubleLinkedList.size()```, ```DoubleLinkedList.isEmpty()``` 
 - 순차 출력 / 역 출력: ```DoubleLinkedList.printNode()```, ```DoublelinkedList.prontNodeInverse()```
 - 노드 추가: ```DoubleLinkedList.append()```, ```DoubleLinkedList.insert()```
 - 노드 삭제: ```DoubleLinkedList.remove()```, ```DoubleLinkedList.removeAt()```
 - 데이터 위치 확인: ```DoubleLinkedList.indexOf()```

<br>
<br>

### ✔ Double Linked List 예제(1)
노드 추가하기

```js
// Node() : data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null; // 이전 데이터 접근
}

// DoubleLinkedList(): head, length를 가진 객체
function LinkedList() {
  this.head = null;
  this.tail = null; // 끝 부분 신경써줘야
  this.length = 0;
}

DoubleLinkedList.prototype.size = function() {
  return this.length;
}

DoubleLinkedList.prototype.isEmpty = function() {
  return this.length === 0;
}

// Test
let dll = new DoubleLinkedList();
let node;
console.log(dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll) // head, tail에 node추가

// 새로운 객체 만들기 
node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);
```

<br>
<br>

### ✔ Double Linked List 예제(2)
정방향, 역방향 출력과 연결 리스트 끝에 노드에 추가하기

```js
// 정방향 출력
DoubleLinkedList.prototype.printNode = function() {
  process.stdout.write("head -> ");
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }

  console.log("null");
}

// 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function() {
  let temp = [];

  process.stdout.write("null <- ");
  for (let node = this.tail; node != null; node = node.prev) {
    temp.push(node.data);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    process.stdout.write(`${temp[i]} <- `);
  }

  console.log("tail");
}

// append(): 연결리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function (value) {
let node = new Node(value);
if (this.head === null) {
this.head = node;
this.tail = node;
} else {
this.tail.next = node;
node.prev = this.tail;
this.tail = node;
}
this.length++;
};

// Test
let dll = new DoubleLinkedList();

dll.append(1);
dll.append(10);
dll.append(100);
dll.printNode();
dll.printNodeInverse();
```

<br>
<br>

### ✔ Double Linked List 예제(3)
position 위치에 노드 추가하기
```js
DoubleLinkedList.prototype.insert = function (value, positon = 0) {
  if (positon < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
  current = this.head,
  index = 0,
  prev;

  if (positon === 0) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = current;
      current.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    current = this.tail;
    current.next = node;
    node.prev = current;
    this.tail = node;
  } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      
      node.next = current;
      prev.next = node;

      current.prev = node;
      node.prev = prev;
    }

  this.length++;

  return true;
}

// Test
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.printNode();
dll.printNodeInverse();

dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();
```

<br>
<br>

### ✔ Double Linked List 예제(4)
value 데이터를 찾아 노드 삭제

```js
LinkedList.prototype.remove = function(value) {
  let current = this.head,
  preve = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (current === this.tail) {
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
};

let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();

console.log(dll.remove(1000));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(1));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(2));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(100));
dll.printNode();
dll.printNodeInverse();
```

<br>
<br>

### ✔ Double Linked List 예제(5)
position 위치 노드 삭제하기

```js
DoubleLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }
  let current = this.head,
    index = 0,
    prev;

  if (position == 0) {
    this.head = current.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (position === this.length - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
    current.next.prev = prev;
  }

  this.length--;

  return current.data;
};

// Test
LinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }
  let current = this.head,
    index = 0,
    prev;

  if (position == 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
  
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};

// Test
let dll = new DoubleLinkedList();

dll.insert(1);
dll.insert(10);
dll.insert(100);
dll.insert(2, 1);
dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();

console.log(dll.removeAt(1000));
dll.printNode();
dll.printNodeInverse();
console.log(dll.removeAt(4));
dll.printNode();
dll.printNodeInverse();
console.log(dll.removeAt());
dll.printNode();
dll.printNodeInverse();
console.log(dll.removeAt(1));
dll.printNode();
dll.printNodeInverse();
```

<br>
<br>

### ✔ Double Linked List 예제(6)
value값을 갖는 노드 위치 반환하기

```js
DoubleLinkedList.prototype.indexOf = function(value) {
  let current = this.head,
  index = 0;

  while (current != null) {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1;
};

DoubleLinkedList.prototype.remove2 = function(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
}

// Test
let dll = new DoubleLinkedList();

dll.insert(1); dll.insert(10); dll.insert(100);
dll.insert(2, 1); dll.insert(3, 3);
dll.printNode();
dll.printNodeInverse();

console.log(dll.indexOf(1000));
console.log(dll.indexOf(1));
console.log(dll.indexOf(100));
console.log(dll.indexOf(10));

console.log(dll.remove(1000));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(1));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(2));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove(100));
dll.printNode();
dll.printNodeInverse();
console.log(dll.size());
```