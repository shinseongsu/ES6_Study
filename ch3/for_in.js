const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };

for(let prop in player) {
    if(!player.hasOwnProperty(prop))
        continue;
    console.log(prop + ': ' + player[prop]);
}

// for ... of 루프

function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
        [rand(0,5)];
}

const hand = [randFace(), randFace(), randFace()];
for(let i = 0 ; i < hand.length ; i++) {
    console.log(`Roll ${i+1}: ${hand[i]}`);
}

