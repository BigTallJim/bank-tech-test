describe('Bank transaction Tests', function(){

  it("Holds a 100 deposit", function(){
    bankTransaction = new BankTransaction(100, "21/10/2019")
    expect(bankTransaction.getAmount()).toEqual(100);
  });

  it("Checks a deposit is true", function(){
    bankTransaction = new BankTransaction(100, "21/10/2019")
    expect(bankTransaction.isDeposit()).toEqual(true);
  });

});