function BankApp(){
  transactions = [];
}

BankApp.prototype.balance = function(){
  return this.sumTransactionArray();
}

BankApp.prototype.deposit = function(depositAmount, date){
  transaction = new BankTransaction(depositAmount, date)
  transactions.push(transaction)
}

BankApp.prototype.withdraw = function(withdrawAmount, date){
  transaction = new BankTransaction(-withdrawAmount, date)
  transactions.push(transaction)
  return withdrawAmount;
}

BankApp.prototype.sumTransactionArray = function(){
  var total = 0;
  transactions.forEach(function(trans) {
    if (trans.isDeposit()) total += trans.getAmount();
    if (trans.isWithdrawal()) total -= trans.getAmount();
  });
  return total;
}