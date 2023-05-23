class Transaction {
  constructor(credit, debit, balance) {
    this.date = new Date().toLocaleDateString();
    if (credit === '') { 
      this.credit = '\b';
    } else {
      this.credit = Number(credit).toFixed(2);
    }
    if (debit === '') { 
      this.debit = '\b';
    } else {
      this.debit = Number(debit).toFixed(2);
    }
    this.balance = balance.toFixed(2);
  }
}

module.exports = Transaction;