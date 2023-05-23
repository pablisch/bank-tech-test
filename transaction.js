class Transaction {
  constructor(credit, debit) {
    this.date = new Date().toLocaleDateString();
    this.credit = credit;
    this.debit = debit;
  }
}

module.exports = Transaction;