// Zerobace Coding Test1

// 1번
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


// 2번
let newPuzzle = []; 
let newWord = "";

function solve2(puzzle, word){
  newPuzzle = puzzle;
  newWord = word;

  // newPuzzle에 들어있는 배열 n번 호출
  for (let i = 0; i < puzzle.length; i++) {
    // 배열 n번의 0번째 단어 호출
    for (let j = 0; j < puzzle[0].length; j++) {
      checkWord(i, j, puzzle.length, puzzle[0].length);
    }
  }
  if(newWord.length == 0 ) return true;
  return false;
}

function checkWord( i, j, n, m){
   // 흑흑 여기서부터 모르겠어요 
}


console.log(solve2([['가', '나', '콜', '사'],['라', '기', '로', '세'],['미',
'모', '리', '움'],['상', '지', '곤', '타']], '참기름'))