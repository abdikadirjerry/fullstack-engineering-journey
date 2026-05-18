export function renderExpenses(expenses, list) {
  list.innerHTML = "";

  expenses.forEach((expense) => {
    const li = document.createElement("li");

    li.classList.add("expense-item");

    li.innerHTML = `
      <div>
        <strong>${expense.title}</strong>
        <p>${expense.category}</p>
      </div>

      <span>$${expense.amount}</span>
    `;

    list.appendChild(li);
  });
}
