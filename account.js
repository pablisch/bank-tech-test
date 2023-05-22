class Account {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    if (amount < 0) throw new Error('Cannot deposit negative amount');
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;