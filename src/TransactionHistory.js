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

    // printHistory() {
    //   let print
      
    //   // let print = "Date || Credit || Debit || Balance ||" 
    //   print = this.transactions.forEach(transaction => {
    //     if(transaction.liability === "debit") {

    //  `\n ${transaction.date} || || ${transaction.amount}.00 || ${transaction.newBalance}.00`
    //     } else {
    //       return `Date || Credit || Debit || Balance || \n ${transaction.date.strftime} || ${transaction.amount} || || ${transaction.newBalance}`
    //     }
    //   })
    //   return print 
    //  }

  printHistory() {
     let print;

       print = this.transactions.forEach(transaction => {
          if(transaction.liability === "debit") {
            `${transaction.date}`
           
          }else{
            

          }
          return print; 
        })
      }
    }
  

