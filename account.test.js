const Account = require('./account.js');
const Transaction = require('./transaction.js'); 

jest.mock('./transaction.js'); // Mock the Transaction module

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
        
        it('should increase the balance by float amount deposited (.99)', () => {  
          account.deposit(.99);
          expect(account.balance).toEqual(0.99);
        }); 
        
        it('should throw an error when depositing a negative amount', () => {
          expect(() => { account.deposit(-100); }).toThrowError('Transactions cannot have a negative amount');
        });
        
        it('should throw an error when depositing a non-number', () => {  
          expect(() => { account.deposit('hello'); }).toThrowError('Transactions must be a number');
        });
    
        it('should throw an error when depositing an amount with more than 2 decimal places', () => {
          expect(() => { account.deposit(99.999); }).toThrowError('Transactions cannot have more than 2 decimal places');
        });
    
        it('should throw an error when depositing an amount greater than 500000', () => {
          expect(() => { account.deposit(500001); }).toThrowError('Transactions cannot be greater than 500000');
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
    
        it('should decrease the balance by float amount withdrawn (.99)', () => { 
          account.deposit(1000);
          account.withdraw(.99);
          expect(account.balance).toEqual(999.01);
        });
        
        it('should throw an error when withdrawing a negative amount', () => {
          expect(() => { account.withdraw(-100); }).toThrowError('Transactions cannot have a negative amount');
        });
    
        it('should throw an error when withdrawing a non-number', () => {
          expect(() => { account.withdraw('hello'); }).toThrowError('Transactions must be a number');
        });
    
        it('should throw an error when withdrawing an amount with more than 2 decimal places', () => {
          expect(() => { account.withdraw(99.999); }).toThrowError('Transactions cannot have more than 2 decimal places');
        });
    
        it('should throw an error when withdrawing an amount greater than 500000', () => {
          expect(() => { account.withdraw(500001); }).toThrowError('Transactions cannot be greater than 500000');
        });
      });

  describe('printStatement', () => {
    beforeEach(() => {
      // Mock the Transaction constructor and its instance properties
      Transaction.mockImplementation((credit, debit) => ({
        date: '31/12/1999',
        credit,
        debit,
      }));
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should print a statement with no transactions when initialised', () => {
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n");
    });

    it('should print a statement with one transaction when depositing 100', () => {
      account.deposit(100);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || 100.00 || \b || 100.00");
    });

    it('should print a statement with one transaction when withdrawing 100', () => {
      account.withdraw(100);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || \b || 100.00 || -100.00");
    });

    it('should print a statement with four transactions when depositing 300 and 200 and withdrawing 100 and 50', () => {
      account.deposit(300);
      account.deposit(200);
      account.withdraw(100);
      account.withdraw(50);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || \b || 50.00 || 350.00\n31/12/1999 || \b || 100.00 || 400.00\n31/12/1999 || 200.00 || \b || 500.00\n31/12/1999 || 300.00 || \b || 300.00");
    });
  });
});.00