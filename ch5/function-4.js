function f(a, b = "default", c = 3) {
  return `${a} - ${b} - ${c}`;
}

console.log(f(5, 6, 7));
console.log(f(5, 6));
console.log(f(5));
console.log(f());

// 객체 프로퍼티인 함수

const o = {
  name: "Wallace",
  bark: function () {
    return "Woof!";
  },
};

const o1 = {
  name: "Wallace",
  bark() {
    return "Woof!";
  },
};

// this 키워드
const o2 = {
  name: "Wallace",
  speak() {
    return `My name is ${this.name}`;
  },
};

console.log(o2.speak());

const speak = o2.speak;
console.log(speak === o2.speak);

console.log(speak()); // my name is undefined

/* const o3 = {
  name: "Julie",
  greetBackwards: function () {
    function getReverseName() {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym. olleH`;
  },
};

console.log(o3.greetBackwards()); */

const o3 = {
  name: "Julie",
  greetBackwards: function () {
    const self = this;
    function getReverseName() {
      let nameBackwards = "";
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
  },
};

console.log(o3.greetBackwards());

/*

const g = function f(stop) {
  if (stop) console.log("f stopped");
  f(true);
};
g(false);

*/

const f1 = function () {
  return "hello!";
};
// 또는

const f2 = () => "hello!";

const f3 = function (name) {
  return `Hello, ${name}`;
};
// 또는
const f4 = (name) => `Hello, ${name}`;

const f5 = function (a, b) {
  return a + b;
};
// 또는
const f6 = (a, b) => a + b;

const o4 = {
  name: "Julie",
  greetBackwards: function () {
    const getReverseName = () => {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym, olleH`;
  },
};

console.log(o4.greetBackwards());
