class Account {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    if (amount < 0) throw new Error('Cannot deposit negative amount');
    if (isNaN(amount)) throw new Error('Cannot deposit non-number');
    // if amount does not match regex ^\d+\.?\d{0,2}$, throw an error
    if (!/^\d+\.?\d{0,2}$/.test(amount)) throw new Error('Cannot deposit amount with more than 2 decimal places');

    this.balance += amount;
  }

  withdraw(amount) {
    if (amount < 0) throw new Error('Cannot withdraw negative amount');
    if (isNaN(amount)) throw new Error('Cannot withdraw non-number');
    // if amount does not match regex ^\d+\.?\d{0,2}$, throw an error
    if (!/^\d+\.?\d{0,2}$/.test(amount)) throw new Error('Cannot withdraw amount with more than 2 decimal places');
    this.balance -= amount;
  }
}

module.exports = Account;