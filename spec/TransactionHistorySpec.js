'use strict'

describe('TransactionHistory', function(){
 var th;
 var trans;

  //need to figure out how to test in isolation
  beforeEach(function(){
    //mock mock mock 
    th = new TransactionHistory;
    trans = new Transaction(50, 1000, 'debit', '01-01-00')
    th.addTransaction(trans)
  })

  describe('stores', function(){
    it('transaction history', function(){
      expect(th.getTransactions().length).toEqual(1)
    })

  //unable to test for console.log out need to use a spy for log
    describe('printing', function(){ 
      it('prints the transaction history', function(){
        console.log = jasmine.createSpy('log')
        var transhistory = th.print()
        expect(console.log).toHaveBeenCalledWith([trans])
        
      })
    })
  })
})