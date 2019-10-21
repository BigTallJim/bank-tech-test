function BankFormatter(bankApp){
  this.bankApp = bankApp;
  this.balance = 0;
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
  console.log(this.printFormatter());
}

BankFormatter.prototype.printFormatter = function(){
  returnString =  "Date      |Credit    |Debit     |Balance   |"
  returnString += "\n"
  returnString +=  "----------|----------|----------|----------|"
  runningTotal = 0;
  bankApp.getTransactions().forEach(function(trans) {
    if (trans.isDeposit()) runningTotal += trans.getAmount();
    if (trans.isWithdrawal()) runningTotal -= trans.getAmount();
    returnString += "\n";
    returnString += trans.getDate().padEnd(10,' ') + "|";
    returnString += (trans.isDeposit()) ? trans.getAmount().toString().padEnd(10,' ')+"|":"          |";
    returnString += (trans.isWithdrawal()) ? trans.getAmount().toString().padEnd(10,' ')+"|":"          |";
    returnString += runningTotal.toString().padEnd(10,' ')+"|";
  });
  
  return returnString;
}