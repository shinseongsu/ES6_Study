const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\[a-z]+)+\b/;

const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;

const numStr = "33.3";
const num = Number(numStr);

const a = parseInt("16 vilots", 10);
const b = parseInt("3a", 16);
const c = parseFloat("15.5 kph");

console.log(a);
console.log(b);
console.log(c);

const d = new Date();
const ts = d.valueOf();

console.log(d);

const e = true;
const n = e ? 1 : 0;
console.log(n);

const n1 = 33.5;
const n2 = 33.5.toString();

console.log(n2);

const arr = [1, true, "hello"];
console.log(arr.toString());

const b1 = 0;
const b2 = !!b1;
const b3 = Boolean(b1);

console.log(b1);
console.log(b2);
console.log(b3);