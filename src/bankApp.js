function BankApp(){
  balance = 0;
}

BankApp.prototype.balance = function(){
  return balance;
}

BankApp.prototype.deposit = function(depositAmount){
  balance += depositAmount;
}