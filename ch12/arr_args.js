const sin = Math.sin;
const cos = Math.cos;
const theta = Math.PI / 4;
const zoom = 2;
const offset = [1, -3];

const pipeline = [
  function rotate(p) {
    return {
      x: p.x * cos(theta) - p.y * sin(theta),
      y: p.x * sin(theta) + p.y * cos(theta),
    };
  },
  function scale(p) {
    return { x: p.x * zoom, y: p.y * zoom };
  },
  function translate(p) {
    return { x: p.x + offset[0], y: p.y + offset[1] };
  },
];

const p = { x: 1, y: 1 };
let p2 = p;
for (let i = 0; i < pipeline.length; i++) {
  p2 = pipeline[i](p2);
}

function sum(arr, f) {
  if (typeof f != "function") f = (x) => x;

  return arr.reduce((a, x) => (a += f(x)), 0);
}

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3], (x) => x * x));
console.log(sum([1, 2, 3], (x) => Math.pow(x, 3)));
