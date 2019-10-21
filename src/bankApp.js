function BankApp(){
  balance = 0;
}

BankApp.prototype.balance = function(){
  return balance;
}

BankApp.prototype.deposit = function(depositAmount){
  balance += depositAmount;
}

BankApp.prototype.withdraw = function(withdrawAmount){
  balance -= withdrawAmount;
  return withdrawAmount;
}