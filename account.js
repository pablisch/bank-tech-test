const Transaction = require('./transaction');

class Account {
  constructor(balance) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.validateAmount(amount);
    this.balance += amount;
    const transaction = new Transaction(amount, 0, this.balance);
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    this.validateAmount(amount);
    this.balance -= amount;
  }

  // helper method for validating amount

  validateAmount(amount) {
    if (amount < 0) throw new Error('Transactions cannot have a negative amount');
    if (isNaN(amount)) throw new Error('Transactions must be a number');
    // regex below is for optional decimal place and 0 to 2 decimal places
    if (!/^\d+\.?\d{0,2}$/.test(amount)) throw new Error('Transactions cannot have more than 2 decimal places');
    if (amount > 500000) throw new Error('Transactions cannot be greater than 500000');
  }
}

module.exports = Account;