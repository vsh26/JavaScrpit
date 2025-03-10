// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance) {
  // Initialize balance and transactions properties
  this.balance = balance;
  this.transactions = [];
}

// Define deposit method on BankAccount's prototype
if (!BankAccount.prototype.deposit) {
  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    this.transactions.push(`Deposited ${amount}`);
  };
}

// Define withdraw method on BankAccount's prototype
if (!BankAccount.prototype.withdraw) {
  BankAccount.prototype.withdraw = function (amount) {
    if (this.balance - amount < 0) {
      this.transactions.push("Insufficient balance");
    } else {
      this.balance -= amount;
      this.transactions.push(`Withdrew ${amount}`);
    }
  };
}

// Define getTransactionHistory method on BankAccount's prototype
if (!BankAccount.prototype.getTransactionHistory) {
  BankAccount.prototype.getTransactionHistory = function () {
    return this.transactions;
  };
}
