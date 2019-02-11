class Account{
  constructor(){
    this.balance =  0
  }

  depositMoney(value){
    this.balance = (this.balance + value)
  }
}