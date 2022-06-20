const Bank=require('./bank')

describe('Bank', () => {
  let bank; 
  beforeEach(() => {
    bank = new Bank();
  })

    describe('.deposit', () => {
      it('augments the account by the amount deposited', () => {
        bank.deposit(10)
        bank.deposit(10)
        expect(bank.account).toEqual([[10, 0], [10, 0]])
      })

    describe('.printStatement', () => {
      it('stores two deposits/withdrawals', () => {
        bank.deposit(10)
        bank.deposit(10)
        expect(bank.printStatement()).toEqual([[10, 0, 10], [10, 0, 20]])
      })
    })

    describe('.withdraw', () => {
      it('deceases the account by the amount withdrawn', () => {
        bank.deposit(10)
        bank.deposit(10)
        bank.withdraw(5)
        expect(bank.printStatement()).toEqual([[10, 0, 10], [10, 0, 20], [0, 5, 15]])
      })
    })
  })
})