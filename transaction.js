class Transaction {
  constructor(credit, debit) {
    this.date = new Date().toLocaleDateString();
    this.credit = credit;
    this.debit = debit;
    // this.credit = credit === '' ? '\b' : Number(credit).toFixed(2);
    // this.debit = debit === '' ? '\b' : Number(debit).toFixed(2);
    // this.balance = balance.toFixed(2);
  }
}

module.exports = Transaction;