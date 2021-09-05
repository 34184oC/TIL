// Zerobace Coding Test1

//1번
function solve1(nums) {
  let array = new Set();
  const numArray = new Set(nums);

  // 빈 배열에 1부터 차곡차곡 넣어주기
  for(let i = 1; i < nums.length + 1; i++){
    array.add(i);
  }
  // filter로 걸러서 numArray가 안가지고 있는 것만 answer에 다시 추가하기
  const answer = new Set([...array].filter(v => !numArray.has(v)));
 
  return Array.from(answer);
}