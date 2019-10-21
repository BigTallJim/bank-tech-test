describe('Bank transaction Tests', function(){

  it("Holds a 100 deposit", function(){
    bankTransaction = new BankTransaction(100, "21/10/2019")
    expect(bankTransaction.getAmount()).toEqual(100);
    expect(bankTransaction.isDeposit()).toEqual(true);
  });

  it("Checks a deposit is true", function(){
    bankTransaction = new BankTransaction(100, "21/10/2019")
    expect(bankTransaction.isDeposit()).toEqual(true);
    expect(bankTransaction.isWithdrawal()).toEqual(false);
  });

  it("Holds a 200 deposit", function(){
    bankTransaction = new BankTransaction(200, "21/10/2019")
    expect(bankTransaction.getAmount()).toEqual(200);
  });

  it("Holds a 100 withdrawal", function(){
    bankTransaction = new BankTransaction(-100, "21/10/2019")
    expect(bankTransaction.getAmount()).toEqual(100);
    expect(bankTransaction.isWithdrawal()).toEqual(true);
  });

  it("Checks a withdrawal is true", function(){
    bankTransaction = new BankTransaction(-100, "21/10/2019")
    expect(bankTransaction.isDeposit()).toEqual(false);
    expect(bankTransaction.isWithdrawal()).toEqual(true);
  });

});