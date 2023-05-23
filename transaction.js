class Transaction {
  constructor(credit, debit, balance) {
    this.date = new Date().toLocaleDateString();
    this.credit = credit === '' ? '\b' : Number(credit).toFixed(2);
    this.debit = debit === '' ? '\b' : Number(debit).toFixed(2);
    this.balance = balance.toFixed(2);
  }
}

module.exports = Transaction;