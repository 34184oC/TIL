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
console.log(ll.size()); // 1> 10 > 100 > null
```

<br>
<br>

### ✔ Linked List 예제(3)
position 위치에 노드 추가하기 🤯
```js
// insert(): positoin 위치에 노드 추가
LinkedList.prototype.insert = function (value, positon = 0) {
  if (positon < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
  current = this.head,
  index = 0,
  prev;

  if (positon == 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < postion) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }

  this.length++;

  return true;
}

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100); // 100 > 10 > 1 > null

ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode(); // 100 > 2 > 10 > 3 > 1 > null
console.log(ll.size()); 
```

<br>
<br>

### ✔ Linked List 예제(4)
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
  } else {
    prev.next = current.next;
  }

  this.length--;

  return current.data;
};

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.remove(1000));
ll.printNode();
console.log(ll.remove(1));
ll.printNode();
console.log(ll.remove(2));
ll.printNode();
console.log(ll.remove(100)); // 10 > 3 > null
ll.printNode();
console.log(ll.size()); // 2
```

<br>
<br>

### ✔ Linked List 예제(5)
position 위치 노드 삭제하기
```js
// insert(): positoin 위치에 노드 추가
LinkedList.prototype.insert = function (value, positon = 0) {
  if (positon < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
  index = 0,
  prev;

  if (positon == 0) {
    this.head = current.next;
  } else {
    while (index++ < postion) {
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }

  this.length--;

  return current.data;
}

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100); 
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.removeAt(1000));
ll.printNode();
console.log(ll.removeAt(4));
ll.printNode();
console.log(ll.removeAt());
ll.printNode();
console.log(ll.removeAt(1)); // 2 > 3 > null
ll.printNode();
console.log(ll.size()); 
```

<br>
<br>

### ✔ Linked List 예제(6)
value값을 갖는 노드 위치 반환하기

```js
LinkedList.prototype.indexOf = function(value) {
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

LinkedList.prototype.remove2 = function(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
}

let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100); 
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.indexOf(1000));
console.log(ll.indexOf(1));
console.log(ll.indexOf(100));
console.log(ll.indexOf(10));

console.log(ll.remove2(1000));
ll.printNode();
console.log(ll.remove2(1));
ll.printNode();
console.log(ll.remove2(2));
ll.printNode();
console.log(ll.remove2(100));
ll.printNode();
console.log(ll.size());
```
