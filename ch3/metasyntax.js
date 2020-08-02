
for(let temp, i = 0, j = 1 ; j < 30 ; temp = i, i = j, j = i + temp) {
    console.log(i);
}

// 무한루프

for(;;)
    consolee.log("I will reepeat forever!");

let s = '3';

for(; s.length < 10 ; s = ' ' + s); //에러가 발생합니다.

for(let x =0.2 ; x < 3.0 ; x += 0.2)
    console.log(x);

for( ; !player.isBroke ;) 
    console.log("Still playing!");