class Bank {

  constructor() {
    this.account = [] 
  }

  deposit(funds) {
    this.account.push(funds)
    this.account.push(0)
    this.account.push(funds)
    
  }

  withdraw(funds) {
    this.account.push(0)
    this.account.push(funds)
    this.account.push(0)

    
  }

  printStatement() {
   return this.account
  }
}

module.exports = Bank;