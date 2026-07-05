// Holds the central data for the application
const AppState = {
  transactions: StorageUtil.getData("transactions") || [],

  addTransaction(desc, amount) {
    const transaction = { id: Date.now(), desc, amount: parseFloat(amount) };
    this.transactions.push(transaction);
    this.save();
  },

  removeTransaction(id) {
    this.transactions = this.transactions.filter((t) => t.id !== id);
    this.save();
  },

  save() {
    StorageUtil.saveData("transactions", this.transactions);
  },
};
