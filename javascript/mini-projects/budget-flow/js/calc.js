const Calculator = {
  getTotalBalance(transactions) {
    const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    return parseFloat(total).toFixed(2);
  },
  // New: Calculate total income only
  getIncomeTotal(transactions) {
    const income = transactions
      .filter((t) => t.amount > 0)
      .reduce((acc, curr) => acc + curr.amount, 0);
    return parseFloat(income).toFixed(2);
  },
  // New: Calculate total expenses only (returned as a positive display number)
  getExpenseTotal(transactions) {
    const expense = transactions
      .filter((t) => t.amount < 0)
      .reduce((acc, curr) => acc + curr.amount, 0);
    return Math.abs(parseFloat(expense)).toFixed(2);
  },
};
