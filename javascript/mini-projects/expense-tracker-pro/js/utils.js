export function calculateTotal(expenses) {
  return expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
}
