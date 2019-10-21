# Bank-tech-test
Makers tech test - Simple Banking application.  
Written in Javascript

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

