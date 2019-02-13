class Transaction{
  constructor(amount, liability, newBalance, date = new Date().toLocaleDateString()) {
    this.amount = amount;
    this.liability = liability;
    this.newBalance = newBalance;
    this.date = date;
  }
  getAmount() {
    return this.amount
  }
  getLiability() {
    return this.liability 
  }
  getNewBalance() {
    return this.newBalance
  }
  getDate() {
    return this.date
  }
}

