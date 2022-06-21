class Account {
  constructor() {
    this.balance = []
  }

  deposit(funds) {
    this.balance.push([funds, 0])
  }

  withdraw(funds) {
    this.balance.push([0, funds])
  }
}

module.exports = Account;