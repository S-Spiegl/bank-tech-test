const Bank=require('./bank')

describe('Bank', () => {
  let bank; 
  beforeEach(() => {
    bank = new Bank();
  })

    describe('.deposit', () => {
    //   it('adds funds to the account', () => {
    //     bank.deposit(10)
    //     expect(bank.printStatement()).toEqual(10)
    // });

    // it('withdraws funds from the account', () => {
    //   bank.deposit(10)
    //   bank.withdraw(10)
    //   expect(bank.printStatement()).toEqual(0)
    // });

    // it('stores the deposit, the withdrawal and the balance', () => {
    //   bank.deposit(10)
    //   expect(bank.printStatement()).toEqual([10, 0, 10])
    // })    

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
  })
})