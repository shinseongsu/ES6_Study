// map 과 filter

const cart = [
  { name: "Widget", price: 9.95 },
  { name: "Gadget", price: 22.95 },
];

const names = cart.map((x) => x.name);
const price = cart.map((x) => x.price);
const discountPrices = price.map((x) => x * 0.8);

console.log(names); // [ 'Widget', 'Gadget' ]
console.log(price); // [ 9.95, 22.95 ]
console.log(discountPrices); // [ 7.96, 18.36 ]

const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart1 = items.map((x, i) => ({ name: x, price: prices[i] }));

console.log(cart1);
//[ { name: 'Widget', price: 9.95 },
//   { name: 'Gadget', price: 22.95 } ]
