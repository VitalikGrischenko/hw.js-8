const goods = 10;
let totalPrice = 0;

for (let i = 0; i < goods; i++) {
  const price = Math.floor(Math.random() * 4501) + 500; 
  totalPrice += price;
}

console.log("Загальна вартість покупки: " + totalPrice);