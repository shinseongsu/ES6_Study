class Log {
  constructor() {
    this.messages = [];
  }

  add(message) {
    this.messages.push({ message, timestamp: Date.now() });
  }

  [Symbol.iterator]() {
    let i = 0;
    const message = this.messages;
    return {
      next() {
        if (i >= message.length) {
          return { value: undefined, done: true };
        }
        return { value: message[i + 1], done: false };
      },
    };
    return this.messages.values();
  }
}

const log = new Log();
log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

for (let entry of log) {
  console.log(`${entry.message} @ ${entry.timestamp}`);
}

class FibonacciSeequence {
  [Symbol.iterator]() {
    let a = 0,
      b = 1;
    return {
      next() {
        let rval = { value: b, done: false };
        b += a;
        a = rval.value;
        return rval;
      },
    };
  }
}

const fib = new FibonacciSeequence();
let i = 0;
for (let n of fib) {
  console.log(n);
  if (++i > 9) break;
}
