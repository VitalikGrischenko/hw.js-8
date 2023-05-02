let price = 0;
let pric = 0;
const good = 8;
for (let i = 1; i <= good; i += 1) {
  pric = Math.round(Math.random() * (5000 - 500) + 500);
  console.log(`The price for ${i} item is ${pric}`);
  price += pric;
}
console.log(`The total price is ${price}`);