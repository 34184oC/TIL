// 1. 수열 최소값 위치
function solve1(nums) {
  let result = [];

  let count = 0;
  let min = 101; // 최대값을 넣어준 뒤 만나서 작은 값은 전부 반환

  for (let i = 0; i < nums.length; i++) {
    if  (min > nums[i]) {
      min = nums[i]; // 돌면서 min 값 반환
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if  (min == nums[i]) {
      result.push(i);
    }
  }
  return result;
}
console.log(solve1([5, 2, 10, 2]));
console.log(solve1([4, 5, 7, 4, 8]));
console.log(solve1([12, 11, 11, 16, 11, 12]));


// 2. 체스 세트
function solve2(chess) {
  let result = [];
  let indexChess = [1, 1, 2, 2, 2, 8];

  for (let i = 0; i < chess.length; i++) {
    result.push(indexChess[i] - chess[i]); 
  }
  return result;
}
console.log(solve2([0, 1, 2, 2, 2, 7]));
console.log(solve2([2, 1, 2, 1, 2, 1]));
console.log(solve2([0, 1, 1, 5, 3, 6]));


// 3. 두 수 최대 합
function solve3(nums) {
  let result = [];

  // 0, 1번쨰 값 비교
  result = nums[0] > nums[1] ? [nums[0], nums[1]] : [nums[1], nums[0]]; 
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > result[0]) {
      result[1] = result[0];
      result[0] = nums[i];
    } else if (nums[i] > result[1]) result[1] = nums[i];
  }
  
  return result;
}
console.log(solve3([-11, 5, 18, -2, -3, 6, 5, 17 ,10, 9]));
console.log(solve3([3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19]));
console.log(solve3([-15, -4, -8, 12, 12, -8, -8, 9, 10, 15, -2, 10, -14, 2, 13, 19, -9, 3, -18, 14]));


// 4. 일곱 난장이
function solve4(dwarf) {
  let result = [];
  
  // 짝퉁 난쟁이 찾기 1
  let sum = 0;
  for (let i = 0; i < dwarf.length; i++) {
    sum += dwarf[i];
  }
  sum -= 100; // 100을 빼고 남은 값 = 짝퉁 난쟁이 두 명 더한 값

  // 짝퉁 난쟁이 찾기 2
  let faker = [];
  for (let i = 0; i < dwarf.length; i++) {
    // 중복 없게 i[0] + j[1]~
    for (let j = i + 1; j < dwarf.length; j++) {
      if (sum == dwarf[i] + dwarf[j]) {
        faker[0] = i;
        faker[1] = j;
        break;
      }
    }
    if (faker.length != 0) break; // 0 -> 답을 못찾음
  }

  // find true dwarf
  let count = 0;
  for (let i = 0; i < dwarf.length; i++) {
    if (faker[0] != i && faker[1] != i) {
      result[count++] = dwarf[i];
    }
  }
  return result;
}
console.log(solve4([1, 5, 6, 7, 10, 12, 19, 29, 33]));
console.log(solve4([25, 23, 11, 2, 18, 3, 28, 6, 37]));
console.log(solve4([3, 37, 5, 36, 6, 22, 19, 2, 28]));


// 5. 나무 그리기
function solve5(height) {
  let str = "\n";

  for (let i = 0; i < height; i++) {
    // 가운데로 땡기기
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(solve5(3));
console.log(solve5(5));
console.log(solve5(7));


// 6. Two Sum : 휴 이건 좀 쉬웠다
function solve6(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(solve6([2, 7, 11, 15], 9));
console.log(solve6([3, 2, 4], 6));
console.log(solve6([3, 3], 6));


// 7. OX 퀴즈
function solve7(mark) {
  let result = 0;

  // 1. 1 = 1, 다음 값이 1이면 +=
  // 2. if 다음 값이 0이면 
  let score = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) result += ++score;
    else if (mark[i] == 0) score = 0;
  }
  
  return result;
}
console.log(solve7([1, 0, 1, 1, 1, 0, 1, 1, 0, 0]));
console.log(solve7([1, 1, 0, 1, 1, 0, 1, 1, 1, 1]));
console.log(solve7([1, 1, 1, 1, 1, 0, 0, 1, 1, 0]));


// 8. 벽돌 옮기기
function solve8(blocks) {
  let result = 0;
  let average = 0;

  // 평균 길이 구하기
  for (let i = 0; i < blocks.length; i++) {
    average += blocks[i];
  }
  average /= blocks.length;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > average) result += blocks[i] - average;
  }

  return result;
}
console.log(solve8([5, 2, 4, 1, 7, 5]));
console.log(solve8([12, 8, 10, 11, 9, 5, 8]));
console.log(solve8([27, 14, 19, 11, 26, 25, 23, 15]));


// 9. 숫자 빈도수 구하기
function solve9(s, e) {
  let result = [];

  // 1) 빈도수 넣을 index 만들어주기
  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  for (let i = s; i <= e; i++) {
    let num = i;
    /* 자리수 구하기 : 9(1), 2(1), 1(1) 카운팅 
    0 이되면 다시 i에 다음 수 집어넣기 */
    while (num != 0) {
      result[num % 10]++; // 1의 자리
      num /= 10;
      num = parseInt(num);
    }
  }
  
  return result;
}
console.log(solve9(129, 137));
console.log(solve9(1412, 1918));
console.log(solve9(4159, 9182));


// 10. 달팽이 만들기🤯 너무어려워 ㅠㅠ
function solve10(length) {
  let result = [];

  // 2차원 배열
  for (let i = 0; i < length; i++)
    result[i] = [];
   
  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--; // 시작을 -부터 해야 숫자 증가시 맞음
 
  // 패턴
  /* 1) length 길이만큼 숫자 채우기
    2) 방향 바꾸기, 2회 반복
    3) length == 0 : 프로그램 멈춤 */

  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }

    length--;
    
    if (length <= 0) break;
    
    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
    }
    
    return result;

}
console.log(solve10(3));
console.log(solve10(5));
console.log(solve10(6));