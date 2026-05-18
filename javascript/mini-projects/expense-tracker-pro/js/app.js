import { saveExpenses, getExpenses } from "./storage.js";
import { renderExpenses } from "./ui.js";

const form = document.getElementById("expense-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const expenseList = document.getElementById("expense-list");

// GET DATA FROM LOCALSTORAGE
const expenses = getExpenses();

// SHOW SAVED EXPENSES
renderExpenses(expenses, expenseList);

// ADD EXPENSE
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const expense = {
    title: titleInput.value,
    amount: Number(amountInput.value),
    category: categoryInput.value,
  };

  expenses.push(expense);

  // SAVE TO LOCALSTORAGE
  saveExpenses(expenses);

  renderExpenses(expenses, expenseList);

  form.reset();
});

// DELETE EXPENSE
expenseList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;

    expenses.splice(index, 1);

    // UPDATE LOCALSTORAGE
    saveExpenses(expenses);

    renderExpenses(expenses, expenseList);
  }
});
