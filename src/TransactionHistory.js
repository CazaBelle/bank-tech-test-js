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

    print() {
      console.log(this.transactions)
        }
      
    }
  

