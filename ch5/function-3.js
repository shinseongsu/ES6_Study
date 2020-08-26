function avg(a, b) {
  return (a + b) / 2;
}

console.log(avg(5, 10));

const a = 5,
  b = 10;

console.log(avg(a, b));

function f(x) {
  console.log(`f 내부: x=${x}`);
  x = 5;
  console.log(`f 내부: x=${x} (할당후)`);
}

let x = 3;
console.log(`f를 호출하기 전: x=${x}`);
f(x);
console.log(`f를 호출한 다음: x=${x}`);

function f1(o) {
  o.message = `f 안에서 수정함 (이전 값: "${o.message}")`;
}

let o = {
  message: "초기값",
};
console.log(`f를 호출하기 전 : o.message="${o.message}"`);
f1(o);
console.log(`f를 호출한 다음 : o.message="${o.message}"`);

// 객체로 할당하기
function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}

const o1 = {
  subject: "I",
  verb: "love",
  object: "JavaScript",
};

console.log(getSentence(o1));

// 베열로 할당 할 경우
function getSentence1([subject, verb, object]) {
  return `${subject} ${verb} ${object}`;
}

const arr1 = ["I", "love", "Javascript"];

console.log(getSentence1(arr1));

function addPrefix(prefix, ...words) {
  // 나중에 더 좋은 코드를 배웁니다.
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));
