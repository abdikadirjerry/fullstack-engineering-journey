export function renderExpenses(expenses, list) {
  list.innerHTML = "";

  expenses.forEach((expense, index) => {
    const li = document.createElement("li");

    li.classList.add("expense-item");

    li.innerHTML = `
      <div>
        <strong>${expense.title}</strong>
        <p>${expense.category}</p>
      </div>

      <div>
        <span>$${expense.amount}</span>

        <button class="delete-btn" data-index="${index}">
          Delete
        </button>
      </div>
    `;

    list.appendChild(li);
  });
}
