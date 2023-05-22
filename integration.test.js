const Account = require('./account');
const Transaction = require('./transaction');

describe('Account', () => {
  it('the transactions array should be empty when initialised', () => {
    const account = new Account(0);
    expect(account.transactions).toEqual([]);
  });

  it('the transactions array should have one transaction when depositing 100', () => {
    const account = new Account(0);
    account.deposit(100);
    expect(account.transactions.length).toEqual(1);
  });

  it('the transactions array should have four transactions when depositing 300, 200, 100 and 50', () => {
    const account = new Account(0);
    account.deposit(300);
    account.deposit(200);
    account.deposit(100);
    account.deposit(50);
    expect(account.transactions.length).toEqual(4);
  });

  it('the transactions array should have one transaction when withdrawing 100', () => {
    const account = new Account(0);
    account.withdraw(100);
    expect(account.transactions.length).toEqual(1);
  });

  it('the transactions array should have four transactions when withdrawing 300, 200, 100 and 50', () => {
    const account = new Account(0);
    account.withdraw(300);
    account.withdraw(200);
    account.withdraw(100);
    account.withdraw(50);
    expect(account.transactions.length).toEqual(4);
  });
});
