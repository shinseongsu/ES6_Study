function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

let funds = 50;

const bets = { crown: 0, anchor: 0, heart: 0,
    spade: 0, club: 0, diamond: 0 };

let totalBet = rand(1, funds);

if(totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
} else {

}

funds = funds - totalBet;