const Account = require('./account');
const Transaction = require('./transaction');

describe('intergration', () => {
  describe('the transactions array', () => {
    it('should be empty when initialised', () => {
      const account = new Account(0);
      expect(account.transactions).toEqual([]);
    });

    it('should have one transaction when depositing 100', () => {
      const account = new Account(0);
      account.deposit(100);
      expect(account.transactions.length).toEqual(1);
    });

    it('should have four transactions when depositing 300, 200, 100 and 50', () => {
      const account = new Account(0);
      account.deposit(300);
      account.deposit(200);
      account.deposit(100);
      account.deposit(50);
      expect(account.transactions.length).toEqual(4);
    });

    it('should have one transaction when withdrawing 100', () => {
      const account = new Account(0);
      account.withdraw(100);
      expect(account.transactions.length).toEqual(1);
    });

    it('should have four transactions when withdrawing 300, 200, 100 and 50', () => {
      const account = new Account(0);
      account.withdraw(300);
      account.withdraw(200);
      account.withdraw(100);
      account.withdraw(50);
      expect(account.transactions.length).toEqual(4);
    });
  });

  describe('printStatement', () => {
    beforeAll(() => {
      const mockDate = new Date('1999-12-31');
      
      // Mock the Date object's toLocaleDateString method
      jest.spyOn(global.Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate.toLocaleDateString());
    });

    afterAll(() => {
      // Restore the original implementation of toLocaleDateString after each test
      jest.restoreAllMocks();
    });

    it('should print a statement with no transactions when initialised', () => {
      const account = new Account(0);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n");
    });

    it('should print a statement with one transaction when depositing 100', () => {
      const account = new Account(0);
      account.deposit(100);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || 100 || 0 || 100");
    });
  });
});
