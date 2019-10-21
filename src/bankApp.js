function BankApp(){
  transactions = [];
}

BankApp.prototype.balance = function(){
  return this.sumTransactionArray();
}

BankApp.prototype.deposit = function(depositAmount, date){
  transactions.push(new BankTransaction(depositAmount, date))
}

BankApp.prototype.withdraw = function(withdrawAmount, date){
  transactions.push(new BankTransaction(-withdrawAmount, date))
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

BankApp.prototype.getTransactions = function(){
  return transactions;
}