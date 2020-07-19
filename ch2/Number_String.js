const result1 = 3 + '30';
const result2 = 3 * '30';

console.log(result1);
console.log(result2);

let heating = true;
let cooling = false;

console.log(heating);
console.log(cooling);

// Symbol 은 유일한 토큰을 나타내기 위해 ES6에서 도입한 새 데이터 타입

const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
console.log(RED == ORANGE); // false


let currentTemp;
const targetTemp = null;
currentTemp = 19.5;
currentTemp = undefined;    // 초기화되지 않은듯 합니다. 권장하지 않습니다.

console.log(currentTemp);