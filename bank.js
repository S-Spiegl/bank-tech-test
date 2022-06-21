const Account = require('./account')
const Statement = require('./statement')

class Bank {

  constructor() {
    //the account is created in bank and injected into the statement
    this.account = new Account()
    this.statement = new Statement(this.account)
    this.date = new Date() 
    this.todaysDate = `${this.date.getDate()}-${this.date.getMonth()}-${this.date.getFullYear()}`
  }

  deposit(funds) {
    this.account.deposit(funds)
  }

  withdraw(funds) {
    this.account.withdraw(funds)
  }

  printStatement() {
    this.statement.printStatementWithHeader()
  }

  printStatementWithHeader() {
    this.statement.printHeader();
    this.statement.printStatement();
  }
}

module.exports = Bank;


