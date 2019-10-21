describe('Bank Tests', function(){

  beforeEach(function() {
    bankApp = new BankApp();
  });

  it("Deposits 1000 into bank account", function(){
    bankApp.deposit(1000);
    expect(bankApp.balance()).toEqual(1000);
  });

  it("Deposits 50 into bank account", function(){
    bankApp.deposit(50);
    expect(bankApp.balance()).toEqual(50);
  });

  it("Makes mutiple deposits into bank account, summing to 80", function(){
    bankApp.deposit(5);
    bankApp.deposit(10);
    bankApp.deposit(15);
    bankApp.deposit(20);
    bankApp.deposit(30);
    bankApp.deposit(0);
    expect(bankApp.balance()).toEqual(80);
  });
});