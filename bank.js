class Bank {

  constructor() {
    this.account = [] 
  }

  deposit(funds) {
    this.account.push([funds, 0])    
  }

  withdraw(funds) {
    this.account.push([0, funds])
  }

  printStatement() {
    //for the first array, initialize the balance whatever the deposit is 
    for  (let i = 0; i < 1; i++) {
      let deposit = this.account[i][0]
      this.account[i].push(deposit)
    } 
    //thereafter, get the balance by adding the deposit to the previous balance or by subtracting the withdrawal from previous balance
    for (let i = 1; i < this.account.length; i++) {
      let deposit = this.account[i][0]
      let withdrawal = this.account[i][1]
      this.account[i].push(this.account[i-1][2]+deposit-withdrawal)
    }
    return this.account
  }
}

module.exports = Bank;


