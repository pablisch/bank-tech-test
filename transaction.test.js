const Transaction = require('./transaction.js');

describe('Transaction', () => {
  describe('initialisation for deposit of 100', () => {
    let transaction;
    beforeEach(() => {
      // Create a mock of the Date object.
      const dateMock = jest.fn(() => new Date('2023-05-22'));

      // Set the mock's getTime() method to return a specific date.
      dateMock.mockImplementation(() => new Date('2023-05-22'));

      // Use the mock in your test.
      transaction = new Transaction(100, 0, 100);
    });
    
    it('should process the date correctly', () => {
      expect(transaction.date).toEqual('22/05/2023');
    });

    it('should have a credit', () => {
      expect(transaction.credit).toEqual(100);
    });

    it('should have a debit', () => {
      expect(transaction.debit).toEqual(0);
    });

    it('should have a balance', () => {
      expect(transaction.balance).toEqual(100);
    });
  });

  describe('initialisation for withdrawal of 100', () => {
    let transaction;
    beforeEach(() => {
      // Create a mock of the Date object.
      const dateMock = jest.fn(() => new Date('2023-05-22'));

      // Set the mock's getTime() method to return a specific date.
      dateMock.mockImplementation(() => new Date('2023-05-22'));

      // Use the mock in your test.
      transaction = new Transaction(0, 100, -100);
    });
    
    it('should process the date correctly', () => {
      expect(transaction.date).toEqual('22/05/2023');
    });

    it('should have a credit', () => {
      expect(transaction.credit).toEqual(0);
    });

    it('should have a debit', () => {
      expect(transaction.debit).toEqual(100);
    });

    it('should have a balance', () => {
      expect(transaction.balance).toEqual(-100);
    });
  });
});
