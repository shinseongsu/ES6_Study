function* rainbow() {
  yield "red";
  yield "orange";
  yield "yellow";
  yield "green";
  yield "blue";
  yield "indigo";
  yield "violet";
}

const it = rainbow();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let color of rainbow()) {
  console.log(color);
}

// yield 표현식과 양방향 통신

function* interrogate() {
  const name = yield "What is your name?";
  const color = yield "What is your favorite color?";
  return `${name}'s favorite color is ${color}`;
}

const it1 = interrogate();

console.log(it1.next());
console.log(it1.next("Ethan"));
console.log(it1.next("orange"));

function* abc() {
  yield "a";
  yield "b";
  return "c";
}

const it2 = abc();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
