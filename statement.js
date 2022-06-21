// const Account = require('./account')

class Statement {
  constructor(account) {
    this.account = account
    this.date = new Date() 
    this.todaysDate = `${this.date.getDate()}-${this.date.getMonth()}-${this.date.getFullYear()}`
  }

  printHeader() {
    return 'date || deposit || withdrawal || balance'
  }
  
  printStatement() {
    //for the first array, initialize the balance whatever the deposit is 
    for  (let i = 0; i < 1; i++) {
      let deposit = this.account.balance[i][0]
      if(this.account.balance[i].length < 3){
      this.account.balance[i].push(deposit)
      }
    } 
    //thereafter, get the balance by adding the deposit to the previous balance or by subtracting the withdrawal from previous balance
    for (let i = 1; i < this.account.balance.length; i++) {
      let deposit = this.account.balance[i][0]
      let withdrawal = this.account.balance[i][1]
      let previousBalance = this.account.balance[i-1][2]
      if(this.account.balance[i].length < 3){
        this.account.balance[i].push(previousBalance+deposit-withdrawal)}
    }

    const balanceWithoutDate = this.account.balance.map (a => a
      .join(' || ')
      .split()
      )

      balanceWithoutDate.map (a => a
        .unshift(this.todaysDate)
        )

      const balanceWithDate = balanceWithoutDate.map (a => a.join(' || '))

      balanceWithDate.unshift('date || deposit || withdrawal || balance')
  
      return balanceWithDate
  }

  printStatementWithHeader(input) {
    return 'test'
  }
}

module.exports = Statement;