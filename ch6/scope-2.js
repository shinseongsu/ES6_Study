let name = "irena";
let age = 25;

function greet() {
  console.log(`Hello, ${name}`);
}

function getBirthYear() {
  return new Date().getFullYear() - age;
}

greet();
console.log(getBirthYear());

let user = {
  name: "Itrena",
  age: 25,
};

function greet1() {
  return `Hello, ${user.name}`;
}

function getBirthYear1() {
  return new Date().getFullYear() - user.age;
}

console.log(greet1());
console.log(getBirthYear1());
