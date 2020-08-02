function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0,5)];
}


while(funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if(totalBet === 13) {
        console.log("Unlucky! Skip this round....");
        continue;
    } else {
        // 플레이...
    }
}

// break 나 return 문을 써서 불필요한 연산 줄이기

let firstPrime = null;

for(let n of bigArrayOfNumbers) {
    if(isPrime(n) && firstPrime === null)
        firstPrime = n;
}


// 루프를 완료한 뒤 인덱스 값 사용하기

let i = 0;
for(; i < bigArrayOfNumbers.length ; i++) {
    if(isPrime(bigArrayOfNumbers[i]))
        break;
}

if(i === bigArrayOfNumbers.length)
    console.log('No prime numbers!');
else 
    console.log(`First prime number foound at position ${i}`);


// 배열을 수정할 때 감소하는 인덱스 사용하기

for(let i = 0 ; i < bigArrayOfNumbers.length ; i++) {
    if(isPrime(bigArrayOfNumbers[i]))
        bigArrayOfNumbers.splice(i,1);
}


for(let i = bigArrayOfNumbers.length - 1 ; i >= 0 ; i--) {
    if(isPrime(bigArrayOfNumbers[i]))
        bigArrayOfNumbers.splice(i, 1);
}

