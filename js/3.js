let number = 1;
for (let i = 3; i <= 9; ) {
  if (i % 2 !== 0) {
    number *= i;
  }
}
console.log(number);