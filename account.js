const Transaction = require('./transaction');
const maxTransactionAmount = 500000;

class Account {
  constructor(openingBalance) {
    this.balance = openingBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.validateAmount(amount);
    this.balance += amount;
    const transaction = new Transaction(amount, 0);
    this.transactions.push(transaction);
  }

  withdraw(amount) {
    this.validateAmount(amount);
    this.balance -= amount;
    const transaction = new Transaction(0, amount);
    this.transactions.push(transaction);
  }

  printStatement() {
    let balance = this.balance;

    const statementTransactions = this.transactions.reverse().map(transaction => {
      balance += transaction.debit - transaction.credit;
      return `${transaction.date} || ${this.formatValue(transaction.credit)} || ${this.formatValue(transaction.debit)} || ${this.formatValue(balance + transaction.credit - transaction.debit)}`;
    }
    ).join("\n");
    
    return `date || credit || debit || balance\n${statementTransactions}`;
  }

  // helper method for statement amount formatting

  formatValue(value) {
    return value === 0 ? '\b' : Number(value).toFixed(2);
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

// const account = new Account(0)
// account.deposit(1000)
// account.deposit(2000)
// account.withdraw(500)
// console.log(account.printStatement())

module.exports = Account;