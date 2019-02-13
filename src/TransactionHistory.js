class TransactionHistory{
  constructor(){
    this.transactions = []
  }

    getTransactions() {
      return this.transactions
    }

    addTransaction(transaction) {
      this.transactions.push(transaction)
    }


    printHistory() {
     let statement = 'date || credit || debit || balance'

       this.transactions.forEach(transaction => {
        if(transaction.liability === 'debit') {
           statement += `\n ${transaction.date} || || ${transaction.amount}.00 || ${transaction.newBalance}.00`
          
          }else{
            statement += `\n ${transaction.date} || ${transaction.amount}.00 || || ${transaction.newBalance}.00`
            
          }
        })
      return statement 
    }

  }

  module.exports = { TransactionHistory }
  
