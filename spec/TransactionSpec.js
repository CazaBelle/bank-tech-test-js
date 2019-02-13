const { Transaction } = require('../src/Transaction.js')

describe('Transaction', function(){

  beforeEach(function() {
    transaction = new Transaction(50, 'debit', 1000, '01-01-00');
   
  });
  describe('knows what', function(){
    it('date transaction occured on ', function(){
      expect(transaction.getDate()).toEqual('01-01-00')
    })
    it('amount was deposited or withdrawn', function(){
      expect(transaction.getAmount()).toEqual(50)
    })
    it('balance after transaction', function(){
      expect(transaction.getNewBalance()).toEqual(1000)
    })
    it('if it was a credit or debit', function(){
      expect(transaction.getLiability()).toEqual('debit')
    })
  })
});