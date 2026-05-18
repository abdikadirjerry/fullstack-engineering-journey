import { renderExpenses } from "./ui.js";

const form = document.getElementById("expense-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const expenseList = document.getElementById("expense-list");

const expenses = [];

renderExpenses(expenses, expenseList);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const expense = {
    title: titleInput.value,
    amount: Number(amountInput.value),
    category: categoryInput.value,
  };

  expenses.push(expense);

  renderExpenses(expenses, expenseList);

  form.reset();
});

expenseList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;

    expenses.splice(index, 1);

    renderExpenses(expenses, expenseList);
  }
});
