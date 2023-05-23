const Account = require('./account');

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
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || 100.00 || \b || 100.00");
    });

    it('should print a statement with four transactions when depositing 300, 200, 100 and 50', () => {
      const account = new Account(0);
      account.deposit(300);
      account.deposit(200);
      account.deposit(100);
      account.deposit(50);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || 50.00 || \b || 650.00\n31/12/1999 || 100.00 || \b || 600.00\n31/12/1999 || 200.00 || \b || 500.00\n31/12/1999 || 300.00 || \b || 300.00");
    });

    it('should print a statement with one transaction when withdrawing 100', () => {
      const account = new Account(0);
      account.withdraw(100);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || \b || 100.00 || -100.00");
    });

    it('should print a statement with four transactions when withdrawing 300, 200, 100 and 50', () => {
      const account = new Account(0);
      account.withdraw(300);
      account.withdraw(200);
      account.withdraw(100);
      account.withdraw(50);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || \b || 50.00 || -650.00\n31/12/1999 || \b || 100.00 || -600.00\n31/12/1999 || \b || 200.00 || -500.00\n31/12/1999 || \b || 300.00 || -300.00");
    });

    it('should print a statement with four transactions when depositing 1000 and 500 and withdrawing 800 and 300', () => {
      const account = new Account(0);
      account.deposit(1000);
      account.deposit(500);
      account.withdraw(800);
      account.withdraw(300);
      expect(account.printStatement()).toEqual("date || credit || debit || balance\n31/12/1999 || \b || 300.00 || 400.00\n31/12/1999 || \b || 800.00 || 700.00\n31/12/1999 || 500.00 || \b || 1500.00\n31/12/1999 || 1000.00 || \b || 1000.00");
    });
  });
});
