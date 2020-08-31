class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ["P", "N", "R", "D"];
    this._userGear = this._userGears[0];
  }

  get userGear() {
    return this._userGear;
  }

  set userGear(value) {
    if (this._userGears.indexOf(value) < 0) {
      throw new Error(`Invalid gear: ${value}`);
    }
    this._userGear = value;
  }

  shift(gear) {
    this.userGear = gear;
  }
}

const Car1 = (function () {
  const carProps = new WeakMap();

  class Car2 {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ["P", "N", "R", "D"];
      this._userGear = this._userGears[0];
    }

    get userGear() {
      return this._userGear;
    }

    set userGear(value) {
      if (this._userGears.indexOf(value) < 0) {
        throw new Error(`Invalid gear: ${value}`);
      }
      this._userGear = value;
    }

    shift(gear) {
      this.userGear = gear;
    }
  }

  return Car2;
})();

// 클래스는 함수다

function Car3(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ["P", "N", "R", "D"];
  this._userGear = this._userGears[0];
}

console.log(typeof Car3); // function
