function BankTransaction(amount, date){
  this.amount=0;
  this.withdrawal = false;
  this.deposit = false;
  this.date = date;

  if (amount >= 0){
    this.deposit = true;
    this.amount = amount;
  }else{
    this.withdrawal = true;
    this.amount = -amount;
  }
}

BankTransaction.prototype.getAmount = function(){
  return this.amount;
}

BankTransaction.prototype.getDate = function(){
  return this.date;
}

BankTransaction.prototype.isDeposit = function(){
  return this.deposit;
}

BankTransaction.prototype.isWithdrawal = function(){
  return this.withdrawal;
}