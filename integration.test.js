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
});
