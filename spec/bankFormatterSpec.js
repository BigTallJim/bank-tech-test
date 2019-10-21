describe('Bank Printing Tests', function(){
  
  beforeEach(function() {
    bankApp = new BankApp();
    bankApp.deposit(10119, "01.01.2019");
    bankApp.deposit(110519, "11.05.2019");
    bankApp.withdraw(251219, "25.12.2019");
    bankApp.deposit(251220, "25.12.2020");
    bankApp.withdraw(210219, "21.02.2019");
    bankApp.deposit(111118, "11.11.2018");
    bankApp.deposit(120219, "12.02.2019");
    bankApp.deposit(50119, "05.01.2019");
  });

  it("checks transactions are in order", function(){
    bankFormatter = new BankFormatter()
    expect(bankFormatter.orderByDate()[0].getAmount()).toEqual(251220);
    expect(bankFormatter.orderByDate()[7].getAmount()).toEqual(111118);
  });

  it("Checks a deposit is true", function(){
    bankTransaction = new BankTransaction(100, "21/10/2019")
    expect(bankTransaction.isDeposit()).toEqual(true);
    expect(bankTransaction.isWithdrawal()).toEqual(false);
  });

  it("Checks Heading Print out ok", function(){
    bankFormatter = new BankFormatter()
    expect(bankFormatter.print()).toEqual("Date     |Credit    |Debit     |Balance   ");
  });

  it("Checks single row printed out with headings", function(){
    bankApp = new BankApp();
    bankApp.deposit(123, "01.01.2019");
    bankFormatter = new BankFormatter(bankApp)
    expect(bankFormatter.printFormatter()).toEqual("Date      |Credit    |Debit     |Balance   |\n01.01.2019|123       |          |123       |");
  });
});