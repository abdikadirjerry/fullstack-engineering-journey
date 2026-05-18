import { saveExpenses, getExpenses } from "./storage.js";
import { renderExpenses } from "./ui.js";
import { calculateTotal } from "./utils.js";

const form = document.getElementById("expense-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const expenseList = document.getElementById("expense-list");

const totalElement = document.getElementById("total");
const searchInput = document.getElementById("search");

// GET DATA FROM LOCALSTORAGE
const expenses = getExpenses();

// INITIAL UI RENDER
updateUI();

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

  updateUI();

  form.reset();
});

// DELETE EXPENSE
expenseList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.dataset.index;

    expenses.splice(index, 1);

    // UPDATE LOCALSTORAGE
    saveExpenses(expenses);

    updateUI();
  }
});

// SEARCH EXPENSES
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filteredExpenses = expenses.filter((expense) => {
    return expense.title.toLowerCase().includes(value);
  });

  renderExpenses(filteredExpenses, expenseList);
});

// UPDATE UI
function updateUI() {
  renderExpenses(expenses, expenseList);

  totalElement.textContent = calculateTotal(expenses);
}
