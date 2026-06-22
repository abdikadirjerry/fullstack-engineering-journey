function calculateIncome(transactions) {
  return transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0);
}

function calculateExpenses(transactions) {
  return transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0);
}

function calculateBalance(transactions) {
  return calculateIncome(transactions) - calculateExpenses(transactions);
}
