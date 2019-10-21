function BankTransaction(){
  amount=0;
  withdrawal = false;
  deposit = false;
  date = ""
}

BankTransaction.prototype.amount = function(){
  return 100;
}