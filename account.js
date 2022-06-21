class Account {
  constructor() {
    this.balance = [];
  }

  deposit(funds) {
    this.balance.push([funds, 0.00]);
  }

  withdraw(funds) {
    this.balance.push([0.00, funds]);
  }
}

module.exports = Account;
