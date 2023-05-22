class Transaction {
  constructor(credit = 0, debit = 0, balance) {
    this.date = new Date().toLocaleDateString();
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }
}

module.exports = Transaction;