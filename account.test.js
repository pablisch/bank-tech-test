const Account = require('./account.js');

describe('Account', () => {
  let account;
  beforeEach(() => {
    account = new Account(0);
  });

  describe('initialisation', () => {
    it('should have a balance of 0 when iniitalised with 0', () => {
      expect(account.balance).toEqual(0);
    });
  });

  describe('deposit', () => {
    it('should increase the balance by the amount deposited', () => {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });
  });
  
});
