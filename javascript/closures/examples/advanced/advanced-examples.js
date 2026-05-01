// Advanced Closure Example (Private Variables)

function bankAccount() {
  let balance = 0;

  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposited:", amount);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Not enough balance");
      } else {
        balance -= amount;
        console.log("Withdraw:", amount);
      }
    },

    getBalance() {
      console.log("Balance:", balance);
    },
  };
}

const account = bankAccount();

account.deposit(100);
account.withdraw(30);
account.getBalance();
