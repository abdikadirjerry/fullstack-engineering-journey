// The main orchestrator connecting the UI to the State
const App = {
  init() {
    // Cache DOM elements
    this.descInput = document.getElementById("descInput");
    this.amountInput = document.getElementById("amountInput");
    this.addBtn = document.getElementById("addBtn");
    this.list = document.getElementById("transactionList");
    this.balanceEl = document.getElementById("balance");
    this.themeBtn = document.getElementById("themeToggle");

    // Bind Events
    this.addBtn.addEventListener("click", () => this.handleAdd());
    this.themeBtn.addEventListener("click", () => ThemeManager.toggle());

    // Initialize features
    ThemeManager.init();
    this.render();
  },

  handleAdd() {
    const desc = this.descInput.value;
    const amount = this.amountInput.value;

    if (!desc || !amount) return;

    AppState.addTransaction(desc, amount);
    this.descInput.value = "";
    this.amountInput.value = "";
    this.render();
  },

  handleDelete(id) {
    AppState.removeTransaction(id);
    this.render();
  },

  render() {
    this.list.innerHTML = "";

    AppState.transactions.forEach((t) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <span>${t.desc}</span> 
                <span>$${t.amount} 
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

// Start the app when the script loads
App.init();
