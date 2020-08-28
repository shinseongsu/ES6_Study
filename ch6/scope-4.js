let globalFunc;

{
  let blockVar = "a";
  globalFunc = function () {
    console.log(blockVar);
  };
}

globalFunc();

let f;

{
  let o = { note: "Safe" };
  f = function () {
    return 0;
  };
}

let oRef = {};
oRef.note = "Not so safe after all!";

// 즉시 호출하는 함수 표현식
(function () {
  // IIFF 바디
})();

const message = (function () {
  const secret = "I'm secret!";
  return `The secret is ${secret.length} characters long`;
})();

console.log(message);

const f1 = (function () {
  let count = 0;
  return function () {
    return `I have been called ${++count} time(s)`;
  };
})();

console.log(f1());
console.log(f1());
