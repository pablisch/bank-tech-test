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
    it('should increase the balance by the amount deposited (100)', () => {
      account.deposit(100);
      expect(account.balance).toEqual(100);
    });

    it('should increase the balance by the amount deposited (50)', () => {
      account.deposit(50);
      expect(account.balance).toEqual(50);
    } );
  });
  
  describe('withdraw', () => {
    it('should decrease the balance by the amount withdrawn (100)', () => {
      account.deposit(100);
      account.withdraw(100);
      expect(account.balance).toEqual(0);
    });

    it('should decrease the balance by the amount withdrawn (50)', () => {
      account.deposit(50);
      account.withdraw(50);
      expect(account.balance).toEqual(0);
    });
  } );
});
