// call 과 apply, bind

const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

function greet() {
  return `Hello, ${this.name}`;
}

console.log(greet()); // Hello, undefined
console.log(greet.call(bruce)); // Hello, Bruce
console.log(greet.call(madeline)); // Hello, Madeline

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, "singer");
update.call(madeline, 1942, "actress");

update.apply(bruce, [1995, "actor"]);
update.apply(madeline, [1918, "writer"]);

// apply 는 배열 요소를 함수 매개변수로 사용해야 할 떄 유용합니다.

const arr = [2, 3, -5, 15, 7];
console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
console.log(Math.min(...arr));
console.log(Math.max(...arr));

const updateBruce = update.bind(bruce);

updateBruce(1904, "actor");
updateBruce.call(madeline, 1274, "king");

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
