/* eslint-disable no-throw-literal */
const Account = require('./account');
const Statement = require('./statement');

class Bank {
  constructor() {
    this.account = new Account();
    this.statement = new Statement(this.account);
  }

  deposit(funds) {
    this.account.deposit(funds);
  }

  withdraw(funds) {
    if (this.account.balance.length >= 1) {
      this.statement.generateStatementWithoutDate();
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
