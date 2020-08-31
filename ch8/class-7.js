// 다형성

class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vegicle created");
  }

  addPassenger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log("Car created");
  }

  deployAirbags() {
    console.log("BWOOSH!");
  }
}

class Motorcycle extends Vehicle {}
const c = new Car();
const m = new Motorcycle();

console.log(c instanceof Car); // true
console.log(c instanceof Vehicle); // true
console.log(m instanceof Car); // false
console.log(m instanceof Motorcycle); // true
console.log(m instanceof Vehicle); // true

class Super {
  constructor() {
    this.name = "Super";
    this.isSuper = true;
  }
}

// 유효하지만 권장하지는 않습니다.
Super.prototype.sneaky = "not recommended!";

class Sub extends Super {
  constructor() {
    super();
    this.name = "Sub";
    this.isSub = true;
  }
}

const obj = new Sub();

for (let p in obj) {
  console.log(
    `${p}: ${obj[p]}` + (obj.hasOwnProperty(p) ? "" : " (inherited)")
  );
}

/*
 *
 *    name: Sub
 *    isSuper: true
 *    isSub: true
 *    sneaky: not recommended! (inherited)
 *
 */
