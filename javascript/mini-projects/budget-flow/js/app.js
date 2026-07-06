const App = {
  init() {
    this.descInput = document.getElementById("descInput");
    this.amountInput = document.getElementById("amountInput");
    this.addBtn = document.getElementById("addBtn");
    this.clearBtn = document.getElementById("clearBtn");
    this.list = document.getElementById("transactionList");
    this.balanceEl = document.getElementById("balance");
    this.themeBtn = document.getElementById("themeToggle");

    this.addBtn.addEventListener("click", () => this.handleAdd());
    this.clearBtn.addEventListener("click", () => this.handleClear());
    this.themeBtn.addEventListener("click", () => ThemeManager.toggle());

    ThemeManager.init();
    this.render();
  },

  handleAdd() {
    const desc = this.descInput.value.trim();
    const amount = parseFloat(this.amountInput.value);

    // Basic validation for JS beginners: prevent empty text or zero amounts
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

    AppState.transactions.forEach((t) => {
      // Determine if the transaction is an income (gold) or expense (red)
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

    this.balanceEl.textContent = Calculator.getTotalBalance(
      AppState.transactions,
    );
  },
};

App.init();
