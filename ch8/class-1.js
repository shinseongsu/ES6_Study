const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for (let prop in o) {
  if (!o.hasOwnProperty(prop)) continue;
  console.log(`${prop}: ${o[prop]}`);
}

Object.keys(o).forEach((prop) => console.log(`${prop}: ${o[prop]}`));

const o1 = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };

Object.keys(o1)
  .filter((prop) => prop.match(/^x/))
  .forEach((prop) => console.log(`${prop}: ${o[prop]}`));

class Car {
  constructor() {}
}

const car1 = new Car();
const car2 = new Car();

console.log(car1 instanceof Car); // true
console.log(car2 instanceof Array); // false
