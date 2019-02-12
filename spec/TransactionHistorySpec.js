'use strict'

describe('TransactionHistory', function(){
var history;
 var trans;


  beforeEach(function(){
    history = new TransactionHistory;
    trans = { amount: 50, liability: 'debit', newBalance: 1000,  date: '01-01-00' }
    history.addTransaction(trans)

  })

    describe('can', function(){
      it('store transaction history', function(){
        expect(history.getTransactions().length).toEqual(1)
      })
  
    
    })
  })
