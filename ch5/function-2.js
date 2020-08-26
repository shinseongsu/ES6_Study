function getGreeting() {
  return "Hello world";
}

console.log(getGreeting()); // Hello world

// getGreeting;  function getGreeting()

const f = getGreeting();

console.log(f); // Hello world

const o = {};

o.f = getGreeting();
console.log(o.f); // Hello world

const arr = [1, 2, 3];
arr[1] = getGreeting();

console.log(arr[1]);
