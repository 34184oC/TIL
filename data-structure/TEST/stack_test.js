// 1. 기차 운행
function answer1(train) {
  let stack = [];
  let num = 0;

  // put train
  for (let i = 0; i < train.length; i++) {
    // [stack.length - 1] -> peek()으로 가능
    while (stack.length === 0 || stack[stack.length - 1] < train[i]) {
      stack.push(++num);
    }

    if (stack[stack.length - 1] === train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return true;
}
console.log(answer1([1, 2, 3]));
console.log(answer1([3, 2, 1]));
console.log(answer1([3, 1, 2]));


// 2. 괄호 짝 찾기