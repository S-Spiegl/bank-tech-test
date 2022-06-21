// const Account = require('./account')

class Statement {
  constructor(account) {
    this.account = account
    this.date = new Date() 
    this.todaysDate = `${this.date.getDate()}-${this.date.getMonth()}-${this.date.getFullYear()}`
    this.header = 'date || deposit || withdrawal || balance'
  }
 
  generateStatement() {
    //for the first array, initialize the balance to the value of the deposit
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
  }

    printStatementWithDate() {

      this.generateStatement()

      const balanceWithoutDate = this.account.balance.map (a => a.join(' || ').split())

        balanceWithoutDate.map (a => a.unshift(this.todaysDate))

      const balanceWithDate = balanceWithoutDate.map (a => a.join(' || '))

        balanceWithDate.unshift(this.header)
    
        return balanceWithDate.join('\n')
    }
}

module.exports = Statement;

//regex out the \n