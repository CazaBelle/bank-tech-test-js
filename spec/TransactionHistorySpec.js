'use strict'
const { TransactionHistory } = require('../src/TransactionHistory.js')

describe('TransactionHistory', function(){
var history;


  beforeEach(function(){
    history = new TransactionHistory;
  })

    describe('can', function(){
      var history2 = new TransactionHistory()
      var trans = { amount: 50, liability: 'debit', newBalance: 1000,  date: '01-01-00' }
      history2.addTransaction(trans)
      
      it('store transaction history', function(){
        expect(history2.transactions.length).toEqual(1)
        expect(history2.transactions[0]).toEqual({ amount: 50, liability: 'debit', newBalance: 1000,  date: '01-01-00' })
      })

      it('will return transactions', function(){
        expect(history2.getTransactions()[0]).toEqual(jasmine.objectContaining({ amount: 50, newBalance: 1000, liability: 'debit', date: '01-01-00' }))
      })
    
    })

    describe('can', function(){
      it('print a statement', function(){
        expect(history.printHistory()).toEqual('date || credit || debit || balance')
      })
    })
  })
