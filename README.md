# Bank-tech-test
Makers tech test - Simple Banking application.  
Written in Javascript

# Running the app in Console.
Things to note
* Date defaults to current date if not entered
* Transactions do not need to be entered in date order, they will be sorted before being printed out.
* If you want the table layout to look nice, you can only deposit or withdraw up to £1,000,000.  It will work with any amount, and I could have made it work for any size, but seemed a little pointless.

To test
* You need to open the BankSpecRunner.html page, this will load the browser with all the classes you need.  Then bring up the console and follow these instructions:

1) Create BankApp object: eg 'bankApp = new BankApp()'
2) Deposit 1000: eg 'bankApp.deposit(1000, '10-01-2012')
3) Deposit 2000: eg 'bankApp.deposit(2000, '13-01-2012')
4) Withdraw 500: eg 'bankApp.withdraw(500, "14-01-2012")
5) Print the Statement: eg 'bankApp.print()'

This should give you a nicely formatted table of transactions

You can also ask for a balance at anytime by calling the balance method: eg 'bankApp.balance()'

# Requirements
* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

# User Stories
```
As a user
I want to deposit 1000
So I can see a balance of 1000 in my account  

As a user 
I want to deposit various amounts
So I can see my balance reflect these deposits

As a user 
I want to withdraw from my account
So I can spend my hard earned money

As a user 
I want to see my balance
So I can plan my big night out

As a user 
I want to print my statement
So I can use it to cry at the amount I've spent
```
### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00

