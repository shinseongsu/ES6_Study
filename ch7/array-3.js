const o = { name: "jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

console.log(arr.indexOf(5)); //1
console.log(arr.lastIndexOf(5)); // 5

console.log(arr.indexOf("a")); // 2
console.log(arr.lastIndexOf({ name: "Jerry" })); // -1

console.log(arr.indexOf({ name: "Jerry" })); // -1
console.log(arr.indexOf(o)); // 3
console.log(arr.indexOf([1, 2])); // -1
console.log(arr.indexOf("9")); // 7
console.log(arr.indexOf(9)); // -1

console.log(arr.indexOf("a", 5)); // -1
console.log(arr.indexOf(5, 5)); // 5
console.log(arr.lastIndexOf(5, 4)); // 1
console.log(arr.lastIndexOf(true, 3)); // -1

const arr1 = [
  { id: 5, name: "Judith" },
  { id: 7, name: "francis" },
];

console.log(arr1.findIndex((o) => o.id === 5)); // 0
console.log(arr1.findIndex((o) => o.name === "francis")); // 1
console.log(arr1.findIndex((o) => o === 3)); //-1
console.log(arr1.findIndex((o) => o.id === 17)); // -1

console.log(arr1.find((o) => o.id === 5)); // { id: 5, name: Judith}
console.log(arr1.find((o) => o.id === 2)); // undefined

const arr2 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
console.log(arr2.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)))); // 4

class Person {
  constructor(name) {
    this.name = name;
    this.id = Person.nextId++;
  }
}

Person.nextId = 0;

const jamie = new Person("Jamie"),
  juliet = new Person("Juliet"),
  peter = new Person("Peter"),
  jay = new Person("Jay");

const arr3 = [jamie, juliet, peter, jay];

console.log(arr3.find((p) => p.id === juliet.id)); // Person { name: 'Juliet', id: 1 }
console.log(
  arr3.find(function (p) {
    return p.id === this.id;
  }, juliet)
); // Person { name: 'Juliet', id: 1 }

const arr4 = [5, 7, 12, 15, 17];

console.log(arr4.some((x) => x % 2 === 0)); // true
console.log(arr4.some((x) => Number.isInteger(Math.sqrt(x)))); // false

const arr5 = [4, 6, 16, 34];

console.log(arr5.some((x) => x % 2 === 0)); // true
console.log(arr5.some((x) => Number.isInteger(Math.sqrt(x)))); // true
