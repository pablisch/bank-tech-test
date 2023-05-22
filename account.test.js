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
    });
    
    it('should increase the balance by the amount deposited (100) and (50)', () => {  
      account.deposit(100);
      account.deposit(50);
      expect(account.balance).toEqual(150);
    }); 
    
    it('should increase the balance by float amount deposited (99.99)', () => {  
      account.deposit(99.99);
      expect(account.balance).toEqual(99.99);
    }); 
    
    it('should throw an error when depositing a negative amount', () => {
      expect(() => { account.deposit(-100); }).toThrowError('Cannot deposit negative amount');
    });
    
    it('should throw an error when depositing a non-number', () => {  
      expect(() => { account.deposit('hello'); }).toThrowError('Cannot deposit non-number');
    });
  });
  
  describe('withdraw', () => {
    it('should decrease the balance by the amount withdrawn (100)', () => {
      account.deposit(1000);
      account.withdraw(100);
      expect(account.balance).toEqual(900);
    });

    it('should decrease the balance by the amount withdrawn (50)', () => {
      account.deposit(1000);
      account.withdraw(50);
      expect(account.balance).toEqual(950);
    });

    it('should decrease the balance by the amount withdrawn (100) and (50)', () => {
      account.deposit(1000);
      account.withdraw(100);
      account.withdraw(50);
      expect(account.balance).toEqual(850);
    });

    it('should decrease the balance by float amount withdrawn (99.99)', () => {
      account.deposit(1000);
      account.withdraw(99.99);
      expect(account.balance).toEqual(900.01);
    });
    
    it('should throw an error when withdrawing a negative amount', () => {
      expect(() => { account.withdraw(-100); }).toThrowError('Cannot withdraw negative amount');
    });

    it('should throw an error when withdrawing a non-number', () => {
      expect(() => { account.withdraw('hello'); }).toThrowError('Cannot withdraw non-number');
    });
  });
});
