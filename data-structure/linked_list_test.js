function Train(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.append = function answer(nums) {
  let ll = new Train(nums),
      current = this.head

  for (let i = 0; i < nums.length; i++) {
    current = new Train(nums[i]);
  }


  return ll;
}
console.log(Train([4, 7, 1, 10., 6]));