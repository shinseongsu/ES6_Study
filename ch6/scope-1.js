function f(x) {
  return x + 3;
}

console.log(f(5));

// x가 아주 잠시나마 존재했었으니 x + 3을 게산할 수 있었습니다.
// 하지만 함수 바디를 벗어나면 x는 존재하지 않는 것처럼 보입니다.
// 따라서 우리는 x의 스코프가 함수 f라고 말합니다.

function f1() {
  console.log("one");
}

function f2() {
  console.log("two");
}

f2();
f1();
f2();

const x = 3;

function f3() {
  console.log(x);
  console.log(y);   // 에러
}

{
  const y = 5;
  f3();
}
