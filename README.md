# Bank Tech Test

## Description

This is a tech test for a bank account. It is a command line application that allows a user to make deposits, withdrawals and print a statement of their transactions.

## Installation

<!-- 1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `jest` to run tests
4. Run `node` to open the node REPL
5. Run `.load ./src/account.js` to load the account class
6. Run `.load ./src/transaction.js` to load the transaction class
7. Run `.load ./src/statement.js` to load the statement class
8. Run `let account = new Account()` to create a new account
9. Run `account.deposit(1000)` to make a deposit
10. Run `account.withdraw(500)` to make a withdrawal
11. Run `account.printStatement()` to print a statement
12. Run `account.balance` to check the balance
13. Run `account.transactions` to check the transactions
14. Run `account.statement` to check the statement
15. Run `account.statement.print()` to print the statement -->
    

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### User Stories

> As a user, 
> So that I can store my money safely,
> I would like to be able to [deposit] money into my [account].

> As a user,
> So that I can access my money,
> I would like to be able to [withdraw] money from my [account].

> As a user,
> So that I can monitor my money and spending,
> I would like to be able to [print] a [statement] of my [transactions].


### Classes

* Account
* Transaction
* Statement

### Methods

#### Account

* deposit(amount) 
* withdraw(amount)
* printStatement()

#### Transaction

* new()
* date()
* credit()
* debit()
* balance()

#### Statement

* new()
* print()






