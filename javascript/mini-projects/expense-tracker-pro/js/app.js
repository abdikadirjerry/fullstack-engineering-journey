import { renderExpenses } from "./ui.js";

const expenseList = document.getElementById("expense-list");

const expenses = [
  {
    title: "Burger",
    amount: 10,
    category: "Food",
  },
];

renderExpenses(expenses, expenseList);
