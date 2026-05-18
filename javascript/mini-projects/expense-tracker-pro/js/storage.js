export function saveExpenses(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

export function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses")) || [];
}
