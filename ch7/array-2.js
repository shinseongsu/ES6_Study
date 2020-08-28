// 배열 요소 조작

const arr = ["b", "c", "d"];
arr.push("e");

console.log(arr.pop());

arr.unshift("a");

console.log(arr.shift());

// 배열의 끝에 여러 요소 추가하기 ( 배열이 바뀌지 않음 )

const arr1 = [1, 2, 3];
console.log(arr1.concat(4, 5, 6));
console.log(arr1.push([4, 5, 6]));
console.log(arr1.concat([4, 5], 6));
console.log(arr1.concat([4, [5, 6]]));

// 배열 일부 가져오기 ( 배열이 바뀌지 않음 )

const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.slice(3));
console.log(arr2.slice(2, 4));
console.log(arr2.slice(-2));
console.log(arr2.slice(1, -2));
console.log(arr2.slice(-2, -1));

// 임의 위치에 요소 추가하거나 제거하기

const arr3 = [1, 5, 7];
console.log(arr3.splice(1, 0, 2, 3, 4));
console.log(arr3.splice(5, 0, 6));
console.log(arr3.splice(1, 2));
console.log(arr3.splice(2, 1, "a", "b"));

// 배열 안에서 요소 교체하기

const arr4 = [1, 2, 3, 4];
console.log(arr4.copyWithin(1, 2));
console.log(arr4.copyWithin(2, 0, 2));
console.log(arr4.copyWithin(0, -3, -1));

// 특정 값으로 배열 채우기

const arr5 = new Array(5).fill(1);
console.log(arr5.fill("a"));
console.log(arr5.fill("b", 1));
console.log(arr5.fill("c", 2, 4));
console.log(arr5.fill(5.5, -4));
console.log(arr5.fill(0, -3, -1));

// 배열 정렬과 역순 정렬
const arr6 = [5, 3, 2, 4, 1];
arr6.sort();
console.log(arr6);

const arr7 = [
  { name: "Suzanne" },
  { name: "Jim" },
  { name: "Trevor" },
  { name: "Amanda" },
];

console.log(arr7.sort());

console.log(arr7.sort((a, b) => a.name > b.name));
console.log(arr7.sort((a, b) => a.name[1] < b.name[1]));
