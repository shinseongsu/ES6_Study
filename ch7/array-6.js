const arr = [5, 7, 2, 4];

const sum = arr.reduce((a, x) => (a += x), 0);

console.log(sum);
// 18

const sum1 = arr.reduce((a, x) => (a += x));

console.log(sum1); // 18

const words = [
  "Beachball",
  "Rodeo",
  "Angel",
  "Aardvark",
  "Xylophone",
  "November",
  "Chocolate",
  "Papaya",
  "Uniform",
  "Joker",
  "Clover",
  "Bali",
];

const alphabetical = words.reduce((a, x) => {
  if (!a[x[0]]) {
    a[x[0]] = [];
  }

  a[x[0]].push(x);
  return a;
}, {});

console.log(alphabetical);

/*
{ B: [ 'Beachball', 'Bali' ],
  R: [ 'Rodeo' ],
  A: [ 'Angel', 'Aardvark' ],
  X: [ 'Xylophone' ],
  N: [ 'November' ],
  C: [ 'Chocolate', 'Clover' ],
  P: [ 'Papaya' ],
  U: [ 'Uniform' ],
  J: [ 'Joker' ] }
*/

const data = [3.3, 5, 7.2, 12, 4, 6, 10];

const stats = data.reduce(
  (a, x) => {
    a.N++;
    let delta = x - a.meam;
    a.mean += delta / a.N;
    a.M2 += delta * (x - a.mean);
    return a;
  },
  { N: 0, mean: 0, M2: 0 }
);

if (stats.N > 2) {
  stats.variance = stats.M2;
  stats.stdev = Math.sqrt(stats.variance);
}

const longWords = words
  .reduce((a, w) => (w.length > 6 ? a + " " + w : a), "")
  .trim();

console.log(longWords);

// Beachball Aardvark Xylophone November Chocolate Uniform

// 삭제 되거나 정의되지 않은 요소들

const arr2 = Array(10).map(function (x) {
  return 5;
});

const arr3 = [1, 2, 3, 4, 5];
delete arr3[2];

console.log(arr3); // [ 1, 2, <1 empty item>, 4, 5 ]

const arr4 = [1, null, "hello", "world", true, undefined];

delete arr4[3];

console.log(arr4.join()); // 1,,hello,,true,
console.log(arr.join("")); // 5724
console.log(arr4.join(" -- ")); // 1 --  -- hello --  -- true --
