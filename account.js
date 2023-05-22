class Account {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    if (amount < 0) throw new Error('Cannot deposit negative amount');
    // if amount is not a number, throw an error
    if (isNaN(amount)) throw new Error('Cannot deposit non-number');
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount < 0) throw new Error('Cannot withdraw negative amount');
    this.balance -= amount;
  }
}

module.exports = Account;