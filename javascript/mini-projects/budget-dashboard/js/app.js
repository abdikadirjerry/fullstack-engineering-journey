let transactions = getTransactions();

const transactionForm = document.getElementById("transaction-form");

const filterSelect = document.getElementById("filter");

function createTransaction(title, amount, type, category) {
  return {
    id: Date.now(),
    title,
    amount: Number(amount),
    type,
    category,
  };
}

function addTransaction(event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();

  const amount = document.getElementById("amount").value;

  const type = document.getElementById("type").value;

  const category = document.getElementById("category").value;

  if (!title || !amount) {
    return;
  }

  const transaction = createTransaction(title, amount, type, category);

  transactions.push(transaction);

  saveTransactions(transactions);

  updateUI(transactions);

  transactionForm.reset();
}

function deleteTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  saveTransactions(transactions);

  applyFilter();
}

function applyFilter() {
  const filterValue = filterSelect.value;

  if (filterValue === "all") {
    updateUI(transactions);

    return;
  }

  const filtered = transactions.filter(
    (transaction) => transaction.type === filterValue,
  );

  updateUI(filtered);
}

transactionForm.addEventListener("submit", addTransaction);

filterSelect.addEventListener("change", applyFilter);

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);

    deleteTransaction(id);
  }
});

updateUI(transactions);
