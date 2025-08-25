// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(accountNumber, holderName, balance) {
  // Initialize accountNumber, holderName, and balance properties
  this.accountNumber = accountNumber;
  this.holderName = holderName;
  this.balance = balance;
}

// Define deposit method on BankAccount's prototype
if (!BankAccount.prototype.deposit) {
  BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
}

// Define withdraw method on BankAccount's prototype
if (!BankAccount.prototype.withdraw) {
  BankAccount.prototype.withdraw = function (amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }
  };
}

// Define transfer method on BankAccount's prototype
if (!BankAccount.prototype.transfer) {
  BankAccount.prototype.transfer = function (amount, targetAccount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      targetAccount.deposit(amount);
    }
  };
}
