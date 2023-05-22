class Account {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.validateAmount(amount);
    this.balance += amount;
  }

  withdraw(amount) {
    this.validateAmount(amount);
    this.balance -= amount;
  }

  // helper method for validating amount

  validateAmount(amount) {
    if (amount < 0) throw new Error('Transactions cannot have a negative amount');
    if (isNaN(amount)) throw new Error('Transactions must be a number');
    if (!/^\d+\.?\d{0,2}$/.test(amount)) throw new Error('Transactions cannot have more than 2 decimal places');
    if (amount > 500000) throw new Error('Transactions cannot be greater than 500000');
  }
}

module.exports = Account;