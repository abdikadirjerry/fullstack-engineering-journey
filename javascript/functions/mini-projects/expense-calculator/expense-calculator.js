const expenses = [100, 250, 75, 50];

function calculateTotalExpenses(expenses) {
  return expenses.reduce((total, expense) => total + expense, 0);
}

function calculateAverageExpense(expenses) {
  return calculateTotalExpenses(expenses) / expenses.length;
}

console.log("Total:", calculateTotalExpenses(expenses));

console.log("Average:", calculateAverageExpense(expenses));
