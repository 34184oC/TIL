<br>

# Circular Linked List

<br>
<br>

## 원형 연결 리스트(Circular Linked List)
각 노드가 데이터와 포인터를 가지며, 원형 형태로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조 

- 사용 많이 안함!
- 구현 메서드
  - 노드 개수 / 빈 노드 확인 / 출력: ```CircularLinkedList.size()```, ```CircularLinkedList.isEmpty()```, ```CircularLinkedList.printNode()``` 
  - 노드 추가: ```CircularLinkedList.append()```, ```CircularLinkedList.insert()```
  - 노드 삭제: ```CircularLinkedList.remove()```, ```CircularLinkedList.removeAt()```
  - 데이터 위치 확인: ```CircularLinkedList.indexOf()```

<br>
<br>

### ✔ Circular Linked List 예제(1)
노드 추가하기

```js
function Node(data) {
  this.data = data;
  this.next = null;
}

function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

CircularLinkedList.prototype.size = function() {
  return this.length;
}

CircularLinkedList.prototype.isEmpty = function() {
  return this.length === 0;
}

// Test
let cll = new CircularLinkedList();
let node;
console.log(cll);

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

### ✔ Circular Linked List 예제(2)
노드 출력과 연결리스트 끝에 노드 추가하기

```js
// print node
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write("head -> ");

  if (this.length != 0) {
    process.stdout.write(`${this.head.data} -> `);
    for (let node = this.head.next; node != this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  } 
  console.log("null");
};

// append()
CircularLinkedList.prototype.append = function(value) {
  let node = new Node(value),
      current = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
};

let cll = new CircularLinkedList();

cll.append(1);
cll.append(10);
cll.append(100);

cll.printNode();
console.log(cll.size());
```
<br>
<br>

### ✔ Circular Linked List 예제(3)
position 위치에 노드 추가하기

```js
CircularLinkedList.prototype.insert = function (value, positon = 0) {
  if (positon < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
  current = this.head,
  index = 0,
  prev;

  if (positon === 0) {
    node.next = current;

    if (this.isEmpty()) {
      current = node;
    } else {
      while (current.next != this.head) {
        current = current.next;
      }
    }
    
    this.head = node;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;

    if (node.next === null) {
      node.next = this.head;
    }
  }

  this.length++;

  return true;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.printNode();

cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();
```

<br>
<br>

### ✔ Circular Linked List 예제(4)
노드 삭제하기

```js
CircularLinkedList.prototype.remove = function(value) {
  let current = this.head,
      preve = current;
      data;

  while (current.data != value && current.next != this.head) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  data = current.data;
  if (current === this.head) {
    while (current.next != this.head) {
      current = current.next;
    }

    this.head = this.head.next;
    current.netx = this.head;
  } else {
    prev.next = current.next;
  }

  this.length--;

  return data;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.remove(1000));
cll.printNode();
console.log(cll.remove(1));
cll.printNode();
console.log(cll.remove(2));
cll.printNode();
console.log(cll.remove(100));
cll.printNode();
console.log(cll.size())
```

<br>
<br>

### ✔ Circular Linked List 예제(5)
position 위치 노드 삭제하기

```js
CircularLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
    index = 0,
    prev;
    data;

  if (position == 0) {
    data = current.data;

    while (current.next != this.head) {
      current = current.next;
    }

    this.head = current.next;
    current.next = this.head;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
  
    data = current.data;
    prev.next = current.next;
  }

  this.length--;

  return data;
};

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.removeAt(1000));
cll.printNode();
console.log(cll.removeAt(4));
cll.printNode();
console.log(cll.removeAt());
cll.printNode();
console.log(cll.removeAt(1));
cll.printNode();
console.log(cll.size());
```

<br>
<br>

### ✔ Circular Linked List 예제(6)
value값을 갖는 노드 위치 반환하기

```js
CircularLinkedList.prototype.indexOf = function(value) {
  let current = this.head,
  index = 0;

  do {
    if (current.data === value) {
      return index;
    }

    index++;
    current = current.next;
  } while (current != this.head);

  return -1;
};

// remove2 : indexOf + removeAt = remove
CircularLinkedList.prototype.remove2 = function(value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
}

let cll = new CircularLinkedList();

cll.insert(1);
cll.insert(10);
cll.insert(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log(cll.indexOf(1000));
console.log(cll.indexOf(1));
console.log(cll.indexOf(100));
console.log(cll.indexOf(10));

console.log(cll.remove2(1000));
cll.printNode();
console.log(cll.remove2(1));
cll.printNode();
console.log(cll.remove2(2));
cll.printNode();
console.log(cll.remove2(100));
cll.printNode();
console.log(cll.size());
```