describe('Bank Tests', function(){

  beforeEach(function() {
    bankApp = new BankApp();
  });

  it("Deposits 1000 into bank account", function(){
    bankApp.deposit(1000);
    expect(bankApp.balance()).toEqual(1000);
  });
});