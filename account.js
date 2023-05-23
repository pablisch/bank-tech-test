const Transaction = require('./transaction');
const maxTransactionAmount = 500000;

class Account {
  constructor(balance) {
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.validateAmount(amount);
    this.balance += amount;
    const transaction = new Transaction(amount, '', this.balance);
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    this.validateAmount(amount);
    this.balance -= amount;
    const transaction = new Transaction('', amount, this.balance);
    this.transactions.push(transaction);
  }

  printStatement() {
    const statementTransactions = this.transactions.reverse().map(transaction => {
      return `${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`;
    }
    ).join("\n");
    return `date || credit || debit || balance\n${statementTransactions}`;
  }

  // helper method for validating amount

  validateAmount(amount) {
    if (amount < 0) throw new Error('Transactions cannot have a negative amount');
    if (isNaN(amount)) throw new Error('Transactions must be a number');
    // regex below is for number with an optional decimal place and 0 to 2 decimal places
    if (!/^\d+\.?\d{0,2}$/.test(amount)) throw new Error('Transactions cannot have more than 2 decimal places');
    if (amount > maxTransactionAmount) throw new Error(`Transactions cannot be greater than ${maxTransactionAmount}`);
  }
}

module.exports = Account;