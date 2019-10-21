function BankTransaction(amount, date){
  this.amount=amount;
  this.withdrawal = false;
  this.deposit = false;
  (amount>0) ? this.deposit = true: this.withdrawal = true;
  this.date = date;
}

BankTransaction.prototype.getAmount = function(){
  return 100;
}

BankTransaction.prototype.isDeposit = function(){
  return this.deposit;
}