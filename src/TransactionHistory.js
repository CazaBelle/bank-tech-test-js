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
     let statement = "date || credit || debit || balance"

       this.transactions.forEach(transaction => {
        if(transaction.liability === "debit") {
           statement += `\n ${transaction.date} || || ${transaction.amount}.00 || ${transaction.newBalance}.00`
          
          }else{
            statement += `\n ${transaction.date} || ${transaction.amount}.00 || || ${transaction.newBalance}.00`
            
          }
        })
      return statement; 
    }

  }
  
    // date || credit || debit || balance
    // 14/01/2012 || || 500.00 || 2500.00
    // 13/01/2012 || 2000.00 || || 3000.00
    // 10/01/2012 || 1000.00 || || 1000.00
