function calculateDiscount(price, percentage) {
  return price - (price * percentage) / 100;
}

console.log(calculateDiscount(100, 20));
