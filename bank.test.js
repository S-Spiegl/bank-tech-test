const Bank=require('./bank')

describe('Bank', () => {
  let bank; 
  beforeEach(() => {
    bank = new Bank();
  })

  let date = new Date()
  let todaysDate;
  beforeEach(() => {
    todaysDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
  })

    describe('.deposit', () => {
      it('augments the account by the amount deposited', () => {
        bank.deposit(10)
        bank.deposit(10)
        expect(bank.account).toEqual([[10, 0], [10, 0]])
      })

    describe('.withdraw', () => {
      it('deceases the account by the amount withdrawn', () => {
        bank.deposit(10)
        bank.deposit(10)
        bank.withdraw(5)
        expect(bank.printStatement()).toEqual([[10, 0, 10, todaysDate], [10, 0, 20, todaysDate], [0, 5, 15, todaysDate]])
      })
    })

    describe('.printStatement', () => {
      it('stores two deposits/withdrawals', () => {
        bank.deposit(10)
        bank.deposit(10)
        expect(bank.printStatement()).toEqual([[10, 0, 10, todaysDate], [10, 0, 20, todaysDate]])
      })

      it('includes the date', () => {
        bank.deposit(1000)
        bank.deposit(2000)
        bank.withdraw(500)
        expect(bank.printStatement()).toEqual([[1000, 0, 1000, todaysDate], [2000, 0, 3000, todaysDate], [0, 500, 2500, todaysDate]])
      })
    })
  })
})

//edge cases: overdrawing 