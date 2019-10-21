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

  it("Withdraw 50 from my bank account", function(){
    bankApp.deposit(1000);
    expect(bankApp.withdraw(50)).toEqual(50);
  });

  it("Withdraw 100, expect balance to equal 900", function(){
    bankApp.deposit(1000);
    bankApp.withdraw(100);
    expect(bankApp.balance()).toEqual(900);
  });

  it("Withdraw 100, balance equal 900, and 100 returned", function(){
    bankApp.deposit(1000);
    expect(bankApp.withdraw(100)).toEqual(100);
    expect(bankApp.balance()).toEqual(900);
  });
});