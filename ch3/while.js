let funds = 50;

while(funds > 1 && funds < 100) {
    // 코드 작성
    funds = funds + 2;
    funds = funds - 1;

}

while(funds > 1 && funds < 100)
    funds = funds + 2;

while(funds > 1 && funds < 100) { funds = funds + 2; }


// 보조 함수
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0,5)];
}

