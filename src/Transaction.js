class Transaction{
  constructor(amount, newBalance, liability, date=Date.now) {
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