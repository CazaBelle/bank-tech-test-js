class Account{
  constructor(){
    this.balance =  0;
    this.transactions = new TransactionHistory;
  }

  getBalance() {
    return this.balance 
  }

  depositMoney(value){
    this.balance = (this.balance + value)
    this.transactions.addTransaction(new Transaction(value, "credit", this.balance))
  }

  withdrawMoney(value){
    this.balance = (this.balance - value)
    this.transactions.addTransaction(new Transaction(value, "debit", this.balance))
  }

  printStatement(){
    return this.transactions.printHistory()
  }
}