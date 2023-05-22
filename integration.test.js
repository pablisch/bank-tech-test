const Account = require('./account');
const Transaction = require('./transaction');

describe('Account', () => {
  it('the transactions array should be empty when initialised', () => {
    const account = new Account(0);
    expect(account.transactions).toEqual([]);
  });

});
