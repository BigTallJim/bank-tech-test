function BankFormatter(bankApp){
  this.bankApp = bankApp;
  this.balance = 0;
}

BankFormatter.prototype.orderByDate = function(){
  transArray = bankApp.getTransactions();

  sortedArray = transArray.sort(function(a,b){
    return  (new Date(b.getDate().slice(6,10),b.getDate().slice(3,5)-1,b.getDate().slice(0,2))) 
            - 
            (new Date(a.getDate().slice(6,10),a.getDate().slice(3,5)-1,a.getDate().slice(0,2)));
  });
  return this.addBalance(sortedArray);
}

BankFormatter.prototype.addBalance = function(sortedArray){
  runningTotal = 0;
  for(i=sortedArray.length-1;i>=0;--i){
    if (sortedArray[i].isDeposit()) runningTotal += sortedArray[i].getAmount();
    if (sortedArray[i].isWithdrawal()) runningTotal -= sortedArray[i].getAmount();
    sortedArray[i].setBalance(runningTotal);
  }
  return sortedArray;
}

BankFormatter.prototype.print = function(){
  console.log(this.printFormatter());
}

BankFormatter.prototype.printFormatter = function(){
  returnString =  "Date      |Credit    |Debit     |Balance   |"
  returnString += "\n"
  returnString +=  "----------|----------|----------|----------|"
  
  sortedTransactions = this.orderByDate(bankApp.getTransactions());
  
  sortedTransactions.forEach(function(trans) {
    returnString += "\n";
    returnString += trans.getDate().padEnd(10,' ') + "|";
    returnString += (trans.isDeposit()) ? trans.getAmount().toString().padEnd(10,' ')+"|":"          |";
    returnString += (trans.isWithdrawal()) ? trans.getAmount().toString().padEnd(10,' ')+"|":"          |";
    returnString += trans.getBalance().toString().padEnd(10,' ')+"|";
  });
  
  return returnString;
}