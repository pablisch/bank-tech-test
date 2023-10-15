const Transaction = require('./transaction.js');

describe('Transaction', () => {
  describe('initialisation for deposit of 100', () => {
    let transaction;
    beforeAll(() => {
      const mockDate = new Date('1999-12-31');
      
      // Mock the Date object's toLocaleDateString method
      jest.spyOn(global.Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate.toLocaleDateString());

      transaction = new Transaction(100, 0);
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
      expect(transaction.credit).toEqual(100);
    });

    it('should have a debit', () => {
      expect(transaction.debit).toEqual(0);
    });
  });

  describe('initialisation for withdrawal of 100', () => {
    let transaction;
    beforeAll(() => {
      const mockDate = new Date('1999-12-31');
      
      // Mock the Date object's toLocaleDateString method
      jest.spyOn(global.Date.prototype, 'toLocaleDateString').mockReturnValue(mockDate.toLocaleDateString());

      transaction = new Transaction(0, 100);
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
      expect(transaction.credit).toEqual(0);
    });

    it('should have a debit', () => {
      expect(transaction.debit).toEqual(100);
    });
  });

  describe('constructor', () => {
    it('should set the credit, debit, and balance properties', () => {
      const transaction = new Transaction(undefined, undefined);
      expect(transaction.date).toEqual(expect.any(String));
      expect(transaction.credit).toEqual(undefined);
      expect(transaction.debit).toEqual(undefined);
    });
    
    it('should set the credit, debit, and balance properties', () => {
      const transaction = new Transaction(0, 100);
      expect(transaction.credit).toEqual(0);
      expect(transaction.debit).toEqual(100);
    });
    
    it('should set the credit, debit, and balance properties', () => {
      const transaction = new Transaction(100, 0);
      expect(typeof transaction.date).toBe('string');
      expect(transaction.credit).toEqual(100);
      expect(transaction.debit).toEqual(0);
    });
  });

  describe('Transaction', () => {
    it('should initialize with a mocked date', () => {
      // Define a fixed date for the mock
      const mockDate = new Date('2000-04-01');
  
      // Create a spy to mock the Date object's constructor
      const dateSpy = jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
  
      // Create an instance of the Transaction class
      const transaction = new Transaction(100, 0);
  
      // Assert that the date in the transaction matches the mock date
      expect(transaction.date).toEqual('01/04/2000'); // Adjust the format as needed
  
      // Restore the original implementation of Date
      dateSpy.mockRestore();
    });
  });
});

