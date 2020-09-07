function addThreeSquareAddFiveTakeSquareRoot(x) {
  return Math.sqrt(Math.pow(x + 3, 2) + 5);
}

// 별명 쓰기 전
const answer =
  (addThreeSquareAddFiveTakeSquareRoot(5) +
    addThreeSquareAddFiveTakeSquareRoot(2)) /
  addThreeSquareAddFiveTakeSquareRoot(7);

const f = addThreeSquareAddFiveTakeSquareRoot;
const answer1 = (f(5) + f(2)) / f(7);

console.log(answer1);
