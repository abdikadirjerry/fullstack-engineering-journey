const bankAccount = {
  owner: "Najio",
  balance: 100,

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
    } else {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}`);
    }
  },

  checkBalance() {
    console.log(`${this.owner}'s Balance: $${this.balance}`);
    return this.balance;
  },
};

bankAccount.deposit(50);
bankAccount.withdraw(30);
bankAccount.checkBalance();
