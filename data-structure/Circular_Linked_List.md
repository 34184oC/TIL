<br>

# Circular Linked List

<br>
<br>

## 원형 연결 리스트(Circular Linked List)
각 노드가 데이터와 포인터를 가지며, 원형 형태로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조

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