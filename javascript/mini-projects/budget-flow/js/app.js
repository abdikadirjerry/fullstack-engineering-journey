const App = {
  init() {
    this.descInput = document.getElementById("descInput");
    this.amountInput = document.getElementById("amountInput");
    this.addBtn = document.getElementById("addBtn");
    this.clearBtn = document.getElementById("clearBtn");
    this.list = document.getElementById("transactionList");
    this.balanceEl = document.getElementById("balance");
    this.incomeTotalEl = document.getElementById("incomeTotal");
    this.expenseTotalEl = document.getElementById("expenseTotal");
    this.themeBtn = document.getElementById("themeToggle");

    // New interactive DOM Elements
    this.searchInput = document.getElementById("searchInput");
    this.tabBtns = document.querySelectorAll(".tab-btn");

    // State Tracking variables
    this.currentFilter = "all";
    this.searchQuery = "";

    // Standard Actions
    this.addBtn.addEventListener("click", () => this.handleAdd());
    this.clearBtn.addEventListener("click", () => this.handleClear());
    this.themeBtn.addEventListener("click", () => ThemeManager.toggle());

    // New Input and Tab Click Listeners
    this.searchInput.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.toLowerCase();
      this.render();
    });

    this.tabBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.tabBtns.forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");
        this.currentFilter = e.target.getAttribute("data-filter");
        this.render();
      });
    });

    ThemeManager.init();
    this.render();
  },

  handleAdd() {
    const desc = this.descInput.value.trim();
    const amount = parseFloat(this.amountInput.value);

    if (!desc || isNaN(amount) || amount === 0) {
      alert("Please enter a valid description and a non-zero amount.");
      return;
    }

    AppState.addTransaction(desc, amount);
    this.descInput.value = "";
    this.amountInput.value = "";
    this.render();
  },

  handleDelete(id) {
    AppState.removeTransaction(id);
    this.render();
  },

  handleClear() {
    if (confirm("Are you sure you want to clear all transactions?")) {
      AppState.clearAll();
      this.render();
    }
  },

  render() {
    this.list.innerHTML = "";

    // Advanced Pipeline Array filtering
    const filteredTransactions = AppState.transactions.filter((t) => {
      const matchesSearch = t.desc.toLowerCase().includes(this.searchQuery);
      const matchesTab =
        this.currentFilter === "all" ||
        (this.currentFilter === "income" && t.amount > 0) ||
        (this.currentFilter === "expense" && t.amount < 0);

      return matchesSearch && matchesTab;
    });

    filteredTransactions.forEach((t) => {
      const typeClass = t.amount > 0 ? "income" : "expense";
      const sign = t.amount > 0 ? "+" : "";

      const li = document.createElement("li");
      li.classList.add(typeClass);
      li.innerHTML = `
                <span>${t.desc}</span> 
                <span>${sign}$${t.amount.toFixed(2)} 
                    <button class="delete-btn" onclick="App.handleDelete(${t.id})">x</button>
                </span>
            `;
      this.list.appendChild(li);
    });

    // Push global calculations to the UI regardless of active filter state
    this.balanceEl.textContent = Calculator.getTotalBalance(
      AppState.transactions,
    );
    this.incomeTotalEl.textContent = Calculator.getIncomeTotal(
      AppState.transactions,
    );
    this.expenseTotalEl.textContent = Calculator.getExpenseTotal(
      AppState.transactions,
    );
  },
};

App.init();
