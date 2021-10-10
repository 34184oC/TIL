// 1. 열차 연결 - append를 직접 구현해보기
function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(nums) {
  let ll = new LinkedList();

  // 1) Train 객체를 nums 수만큼 만들어 next로 연결
  // 연결 : 이전 train 객체.next <-> 현재 tran 객체


  // 2) 가장 첫 번째 train 객체를 this.head로 연결
  let current, prev;
  for (let i = 0; i < nums.length; i++) {
    current = new Train(nums[i]);
 
    if (i === 0) {
      ll.head = current; // first train obj
    } else {
        prev.next = current; // first 다음 값으로 연결
    }
    
    prev = current; // 내 위치 이전 값과 연결
  }

  return ll;
}

LinkedList.prototype.printNode = function() {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
}

let input = [
  // TC: 1
  [4, 7, 1, 10, 6],
  // TC: 2
  [3, 10, 6, 9, 11, 3, 4],
  // TC: 3
  [5, 8, 7, 3, 4, 1, 2, 7, 10, 7],
  ];

LinkedList.prototype.printNode = function() {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
};

for (let i = 0; i < input.length; i++) {
  answer(input[i]).printNode();
}