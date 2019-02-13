const { Account } = require('../src/Account.js')

describe('Account', function(){
  var account; 
 

  // beforeEach(function() {    
  //   account = new Account();
    
  // });

  describe('knows when money is', function(){
    let account = new Account();
    it('deposited', function(){
      account.depositMoney(10);
      expect(account.getBalance()).toEqual(10);
    })

    it('withdrawn', function(){
      let account = new Account();
      account.depositMoney(100);
      account.withdrawMoney(25);
      expect(account.getBalance()).toEqual(75);
    })
  })

  // describe('can', function(){
  //   it('print a statement', function(){
  //     account.depositMoney(150);
  //     account.withdrawMoney(25);
  //     expect(account.printStatement()).toEqual('date || credit || debit || balance ||0 ||')
  //   })
  // })
})