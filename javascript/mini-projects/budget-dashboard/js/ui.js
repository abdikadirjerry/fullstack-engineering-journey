function renderTransactions(transactions) {
  const transactionList = document.getElementById("transaction-list");

  transactionList.innerHTML = "";

  if (transactions.length === 0) {
    transactionList.innerHTML = `
            <tr>
                <td colspan="5">
                    No transactions found
                </td>
            </tr>
        `;

    return;
  }

  transactions.forEach((transaction) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${transaction.title}</td>
            <td>$${transaction.amount}</td>
            <td>${transaction.type}</td>
            <td>${transaction.category}</td>
            <td>
                <button
                    class="delete-btn"
                    data-id="${transaction.id}"
                >
                    Delete
                </button>
            </td>
        `;

    transactionList.appendChild(row);
  });
}

function renderSummary(transactions) {
  const income = calculateIncome(transactions);

  const expenses = calculateExpenses(transactions);

  const balance = calculateBalance(transactions);

  document.getElementById("income").textContent = `$${income}`;

  document.getElementById("expenses").textContent = `$${expenses}`;

  document.getElementById("balance").textContent = `$${balance}`;
}

function updateUI(transactions) {
  renderTransactions(transactions);

  renderSummary(transactions);
}
