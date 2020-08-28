// 함수 스코프와 호이스팅

let var1;
let var2 = undefined;

console.log(var1); // undefined
console.log(var2); // undefined

// 에러
/*

x;
let x = 3;

*/

console.log(x); // undefined
var x = 3;
console.log(x); // 3

// 선언이 제일 위로 끌어 올려집니다.

x = 2;

if (x !== 3) {
  console.log(y); // 5
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y); // 5
}
if (x === 3) {
  console.log(y);
}

var z = 3;
if (z === 3) {
  var z = 2;
  console.log(z); //2
}

console.log(z); // 2
