const Transaction = require('./transaction.js');

describe('Transaction', () => {
  describe('initialisation for deposit of 100', () => {
    let transaction;
    beforeAll(() => {
      const mockDate = new Date('1999-12-31');
      
      // Mock the Date object's toLocaleDateString method
      jest.spyOn(global.Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate.toLocaleDateString());

      transaction = new Transaction(100, 0, 100);
    });

    afterAll(() => {
      // Restore the original implementation of toLocaleDateString after each test
      jest.restoreAllMocks();
    });
    
    
    it('should process the date correctly', () => {
      expect(transaction.date).toEqual('31/12/1999');
    });

    // Note that the mock is called twice, once in the test and once in the code
    it('should have the mock date called twice', () => {
      expect(global.Date.prototype.toLocaleDateString).toHaveBeenCalledTimes(2);  
    });

    it('should have a credit', () => {
      expect(transaction.credit).toEqual("100.00");
    });

    it('should have a debit', () => {
      expect(transaction.debit).toEqual("0.00");
    });

    it('should have a balance', () => {
      expect(transaction.balance).toEqual("100.00");
    });
  });

  describe('initialisation for withdrawal of 100', () => {
    let transaction;
    beforeAll(() => {
      const mockDate = new Date('1999-12-31');
      
      // Mock the Date object's toLocaleDateString method
      jest.spyOn(global.Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate.toLocaleDateString());

      transaction = new Transaction(0, 100, -100);
    });

    afterAll(() => {
      // Restore the original implementation of toLocaleDateString after each test
      jest.restoreAllMocks();
    });
    
    
    it('should process the date correctly', () => {
      expect(transaction.date).toEqual('31/12/1999');
    });

    // Note that the mock is called twice, once in the test and once in the code
    it('should have the mock date called twice', () => {
      expect(global.Date.prototype.toLocaleDateString).toHaveBeenCalledTimes(2);  
    });

    it('should have a credit', () => {
      expect(transaction.credit).toEqual("0.00");
    });

    it('should have a debit', () => {
      expect(transaction.debit).toEqual("100.00");
    });

    it('should have a balance', () => {
      expect(transaction.balance).toEqual("-100.00");
    });
  });

  describe('constructor', () => {
    it('should set the credit, debit, and balance properties', () => {
      const transaction = new Transaction(undefined, undefined, 100);
      expect(transaction.credit).toEqual('NaN');
      expect(transaction.debit).toEqual('NaN');
      expect(transaction.balance).toEqual("100.00");
    });
  });
});

