/* eslint-disable no-throw-literal */
const Account = require('./account');
const Statement = require('./statement');

class Bank {
  constructor() {
    // the account is created in bank and injected into the statement

    // I cannot call this.statement from within a method in bank. I can call it with e.g.
    // bank.statement.printHeader() in node, but if I try to wrap that method in a bank function,
    // e.g.
    // bank.printHeader() {
    // this.statement.printHeader()
    // }
    // it doesn't work... I thought it might be to do with creating a new instance of statement
    // eslint-disable-next-line max-len
    // in the constructor i.e. maybe it was generating a new instance every time and wiping the data,
    // but even statement methods
    // that don't rely on input, e.g printHeader(), back when it existed, did not work...
    this.account = new Account();
    this.statement = new Statement(this.account);
  }

  deposit(funds) {
    this.account.deposit(funds);
  }

  withdraw(funds) {
    if (this.account.balance.length >= 1) {
      this.statement.generateStatement();
    } else {
      throw 'Insufficient funds!';
    }
    if (this.statement.account.balance[this.statement.account.balance.length - 1][2] >= funds) {
      this.account.withdraw(funds);
    } else {
      throw 'Insufficient funds!';
    }
  }
}

module.exports = Bank;
