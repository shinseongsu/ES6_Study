console.log("Before timeout: " + new Date());
function f() {
  console.log("After timeout: " + new Date());
}
setTimeout(f, 60 * 1000); // 1분 후
console.log("I happen after setTimeout!");
console.log("Me too!");

// 1분후
setTimeout(function () {
  console.log("After timeout: " + new Date());
}, 60 * 1000);
