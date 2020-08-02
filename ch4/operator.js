let x;

x = 3 * 5;

// ==================

let x, y;

y = x = 3 * 5;


// ==================

let x,y;
y = x = 3 * 5;
y = x = 15;
y = 15;



const x = 5;
const y = 3 - -x;

const s = "5";
const y = 3 + +s;

const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x*1;
const p2 = +x2*2;
const p3 = +x3*3;
const p4 = -x4*4;


let x= 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;

let y = 10;

const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;


let x = 3, y;
x = y = 6 * 5 / 2;


// 이 표현식을 우선순위에 따라 다음에 일어날 행동에 괄호를 치곘습니다.
//
// 곱셈과 나눗셈, 우선순위 14, 왼쪽에서 오른쪽으로
//   x += y = (6*5)/2
//   x += y = (30/2)
//   x += y = 15
// 할당, 우선순위 3, 오른쪽에서 왼쪽으로
//   x += (y = 15)
//   x += 15
//  18


// 비교 연산자

const n = 5;
const s = "5";
n === s;
n !== s;
n === Number(s);
n !== Number(s);
n == s;
n != s;

const a = { name: "an object" };
const b = { name: "an object" };
a === b;
a !== b;
a == b;
a != b;

3 > 5;
3 >= 5;
3 < 5;
3 <= 5;

5 > 5;
5 >= 5;
5 < 5;
5 <= 5;


let n = 0;
while(true) {
    n += 0.1;
    if(n === 0.3) break;
}
console.log(`Stopped at ${n}`);


let n = 0;
while(true) {
    n += 0.1;
    if(Math.abs(n - 0.3) < Number.EPSILON)
        break;
}
console.log(`Stopped at ${n}`);

// 문자열 병합

3 + 5 + "8";
"3" + 5 + 8;

// 단축 평가

const skipIt = true;
let x= 0;
const result = skipIt || x++;