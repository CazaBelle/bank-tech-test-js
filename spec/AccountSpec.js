describe('Account', function(){
  var account; 
  var balance; 

  beforeEach(function() {    
    account = new Account();
  });


  describe('knows when money is', function(){
    it('deposited', function(){
      account.depositMoney(10);
      expect(account.balance).toEqual(10);
    })
    
    it('withdrawn', function(){
      
    })
  })
})