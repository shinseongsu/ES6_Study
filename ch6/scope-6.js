// 함수 호이스팅

f(); //f

function f() {
  console.log("f");
}

/*
f1();   // f는 정의되지 않습니다.

let f1 = function () {
  console.log("f1");
};
*/

// 사각지대
if (typeof x === "undefined") {
  console.log("x doesn't exist or is undefined");
} else {
  // x 를 사용해도 안전한 코드
}

if (typeof x === "undefined") {
  console.log("x doesn't exist or is undefined");
} else {
  // x를 사용해도 안전한 코드
}
let x = 5;
