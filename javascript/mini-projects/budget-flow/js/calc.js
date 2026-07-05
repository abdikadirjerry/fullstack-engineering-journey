// Handles math operations securely
const Calculator = {
  getTotalBalance(transactions) {
    const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    return total.toFixed(2);
  },
};
