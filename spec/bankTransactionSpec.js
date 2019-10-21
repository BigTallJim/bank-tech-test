describe('Bank transaction Tests', function(){

  it("Holds a 100 deposit", function(){
    bankTransaction = new BankTransaction(100, false, true, "21/10/2019")
    expect(bankTransaction.amount()).toEqual(100);
  });

});