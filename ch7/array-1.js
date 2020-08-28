// 배열 리터럴

const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [
  [1, 2, 3],
  ["one", 2, "three"],
];

const arr4 = [
  { name: "Fred", type: "object", luckyNumbers: [5, 7, 13] },
  [
    { name: "Susan", type: "object" },
    { name: "Anthony", type: "object" },
  ],
  1,
  function () {
    return "arrays can contain functions too";
  },
  "three",
];

console.log(arr1[0]);
console.log(arr2[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);

console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

arr1[4] = 5; // 배열 길이 늘리기
console.log(arr1);
console.log(arr1.length);

// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이가 늘어나지는 않습니다.
arr2[10];
console.log(arr2.length);

// Array 생성자 ( 거의 사용하지 않습니다. )
const arr5 = new Array();
const arr6 = new Array(1, 2, 3);
const arr7 = new Array(2);
const arr8 = new Array("2");
