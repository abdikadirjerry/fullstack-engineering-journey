const Calculator = {
  getTotalBalance(transactions) {
    const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    // Returns a string with exactly two decimal places (e.g., 10.50)
    return parseFloat(total).toFixed(2);
  },
};
