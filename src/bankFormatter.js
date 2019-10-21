function BankFormatter(bankApp){
  this.bankApp = bankApp;
}

BankFormatter.prototype.orderByDate = function(){
  transArray = bankApp.getTransactions();

  sortedArray = transArray.sort(function(a,b){
    return  (new Date(b.getDate().slice(6,10), 
                      b.getDate().slice(3,5)-1, 
                      b.getDate().slice(0,2))) 
            - 
            (new Date(a.getDate().slice(6,10), 
                      a.getDate().slice(3,5)-1, 
                      a.getDate().slice(0,2)));
  });
  return sortedArray;
}

BankFormatter.prototype.print = function(){
  return "Date     |Credit    |Debit     |Balance   "
}