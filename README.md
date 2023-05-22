# Bank Tech Test

## Description

This is a tech test for a bank account. It is a command line application that allows a user to make deposits, withdrawals and print a statement of their transactions.

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `jest` to run tests

## Example usage in Node (step by step)

1. Run `node` to open the node REPL
2. Run `const Account = require('./account.js')` to require the Account class
3. Run `const account = new Account(0)` to create a new account with a balance of 0
4. Run `account.deposit(1000)` to deposit £1000
5. Run `account.deposit(2000)` to deposit £2000
6. Run `account.withdraw(500)` to withdraw £500
7. Run `account.printStatement()` to print a statement of your transactions
8. Run `account.balance` to check your balance

## Example usage in Node (all at once)

Copy this code as a block and paste it into the node REPL `node` to run all the commands at once:
```
const Account = require('./account.js')
const account = new Account(0)
account.deposit(1000)
account.deposit(2000)
account.withdraw(500)
account.printStatement()
```

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

### Design visualisation

User interaction with the application:
[![Bank Tech Test User Interaction Design]](images/bank-tech-test-user-interaction.png)


### Classes

* Account(balance - float) - manages transactions and balance
* Transaction(credit - float, debit - float, balance - float) - stores transaction details with a date

### Methods

#### Account

* new(balance - float)
* deposit(amount - float) 
* withdraw(amount - float)
* printStatement()

#### Transaction

* new(credit - float, debit - float, balance - float, ADDS date - date)

### Edge Cases

* User cannot withdraw or deposit a negative amount
* User cannot withdraw or deposit a non-number
* User cannot withdraw or deposit a number with more than 2 decimal places
* User cannot withdraw or deposit a number with more than 500,000
* User cannot withdraw or deposit a number with less than 1 digit before the decimal point

## Example tests

```
> account = new Account(0)
> account.deposit(1000)
> account.deposit(2000)
> account.withdraw(500)
> account.printStatement()
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

