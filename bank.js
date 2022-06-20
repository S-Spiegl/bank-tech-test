class Bank {

  constructor() {
    this.account = 0
  }

  deposit(funds) {
    this.account += funds
  }

  printStatement() {
   return this.account
  }
}

module.exports = Bank;