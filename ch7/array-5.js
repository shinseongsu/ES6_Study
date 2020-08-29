const cards = [];

for (let suit of ["H", "C", "D", "S"]) {
  for (let value = 1; value <= 13; value++) {
    cards.push({ suit, value });
  }
}

console.log(cards.filter((c) => c.value === 2));

/*
  [ { suit: 'H', value: 2 },
  { suit: 'C', value: 2 },
  { suit: 'D', value: 2 },
  { suit: 'S', value: 2 } ]
*/

console.log(cards.filter((c) => c.suite === "D"));

// []

console.log(cards.filter((c) => c.value > 10));

/*
  [ { suit: 'H', value: 11 },
  { suit: 'H', value: 12 },
  { suit: 'H', value: 13 },
  { suit: 'C', value: 11 },
  { suit: 'C', value: 12 },
  { suit: 'C', value: 13 },
  { suit: 'D', value: 11 },
  { suit: 'D', value: 12 },
  { suit: 'D', value: 13 },
  { suit: 'S', value: 11 },
  { suit: 'S', value: 12 },
  { suit: 'S', value: 13 } ]
*/

console.log(cards.filter((c) => c.value > 10 && c.suit === "H"));

/*
[ { suit: 'H', value: 11 },
  { suit: 'H', value: 12 },
  { suit: 'H', value: 13 } ]
*/

function cardToString(c) {
  const suits = { H: "\u2665", C: "\u2663", D: "\u2666", S: "\u2660" };
  const values = { 1: "A", 11: "J", 12: "Q", 13: "K" };

  for (let i = 2; i <= 10; i++) {
    values[i] = i;
  }

  return values[c.value] + suits[c.suit];
}

console.log(cards.filter((c) => c.value === 2).map(cardToString));
// [ '2♥', '2♣', '2♦', '2♠' ]

console.log(
  cards.filter((c) => c.value > 10 && c.suit === "H").map(cardToString)
);

// [ 'J♥', 'Q♥', 'K♥' ]
